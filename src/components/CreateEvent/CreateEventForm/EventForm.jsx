import { useForm, Controller } from "react-hook-form";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { ToastContainer } from "react-toastify";
import { GrClose } from "react-icons/gr";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import { buttons } from "../../Home/Filters/Categories/Categories";
import {
  CleanupBtn,
  Container,
  Error,
  EventFormButton,
  Form,
  FormInput,
  FormLabel,
} from "./EventForm.styled";
import { addEventToDB, updateEvent } from "../../../helper/api";
import { useNavigate } from "react-router-dom";
import { errorToast, successfullToast } from "helper/toastNotofication";

const EventForm = ({ event, btnName }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: event ? event.title : "",
      description: event ? event.description : "",
      location: event ? event.location : "",
      category: event ? { name: event.category } : "",
      picture: event ? event.picture : "",
      priority: event ? { name: event.priority } : "",
      date: event ? new Date(event.date) : "",
      time: event ? new Date(event.date) : "",
    },
  });

  const onFormSubmit = async (data) => {
    const {
      title,
      description,
      location,
      category,
      date,
      time,
      priority,
      picture,
    } = data;
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    const dataToSend = {
      title,
      description,
      location,
      category: category.name,
      date,
      priority: priority.name,
      picture,
    };
    try {
      if (event) {
        await updateEvent(dataToSend, event.id);
        successfullToast(`event ${title} has been update`);
        setTimeout(() => navigate("/"), 2000);
        return;
      }
      await addEventToDB(dataToSend);
      successfullToast(`event ${title} has been added`);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      errorToast(error.response.statusText);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Container>
        <FormLabel>
          Title
          <FormInput
            type="text"
            borderColor={errors.title ? "#ff2b77" : null}
            {...register("title", {
              required: { value: true, message: "Field is requried" },
            })}
          />
          <CleanupBtn
            onClick={() => setValue("title", "")}
            color={errors.title ? "#ff2b77" : null}
          >
            <GrClose />
          </CleanupBtn>
          {errors.title && <Error>{errors.title.message}</Error>}
        </FormLabel>
        <FormLabel height={["200px"]}>
          Description
          <FormInput
            as="textarea"
            borderColor={errors.description ? "#ff2b77" : null}
            height={["156px"]}
            {...register("description", {
              minLength: { value: 2, message: "Min length is 2" },
              required: { value: true, message: "Field is requried" },
            })}
          />
          <CleanupBtn
            color={errors.description ? "#ff2b77" : null}
            onClick={() => setValue("description", "")}
          >
            <GrClose />
          </CleanupBtn>
          {errors.description && <Error>{errors.description.message}</Error>}
        </FormLabel>

        <FormLabel>
          Select date{" "}
          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required." }}
            render={({ field, fieldState }) => (
              <>
                <Calendar
                  dateFormat="dd.mm.yy"
                  inputId={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className={fieldState.invalid ? "error" : ""}
                />
              </>
            )}
          />
          {errors.date && <Error>{errors.date.message}</Error>}
        </FormLabel>

        <FormLabel>
          Select time
          <Controller
            name="time"
            control={control}
            rules={{ required: "Date is required." }}
            render={({ field, fieldState }) => (
              <>
                <Calendar
                  timeOnly
                  inputId={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className={fieldState.invalid ? "error" : ""}
                />
              </>
            )}
          />
          {errors.time && <Error>{errors.time.message}</Error>}
        </FormLabel>

        <FormLabel>
          Location{" "}
          <FormInput
            type="text"
            borderColor={errors.location ? "#ff2b77" : null}
            {...register("location", {
              required: { value: true, message: "Please, add a location" },
            })}
          />
          <CleanupBtn
            color={errors.location ? "#ff2b77" : null}
            onClick={() => setValue("location", "")}
          >
            <GrClose />
          </CleanupBtn>
          {errors.location && <Error>{errors.location.message}</Error>}
        </FormLabel>
        <FormLabel>
          Category
          <Controller
            name="category"
            control={control}
            rules={{ required: "Please, select a category" }}
            render={({ field, fieldState }) => (
              <>
                <Dropdown
                  id={field.name}
                  options={buttons}
                  value={field.value}
                  optionLabel="name"
                  className={fieldState.invalid ? "error" : ""}
                  onChange={(e) => {
                    field.onChange(e.value);
                  }}
                />
              </>
            )}
          />
          {errors.category && <Error>{errors.category.message}</Error>}
        </FormLabel>
        <FormLabel>
          Add Picture{" "}
          <FormInput
            type="text"
            borderColor={errors.picture ? "#ff2b77" : null}
            {...register("picture", {
              required: { value: true, message: "Add link of an image" },
            })}
          />
          <CleanupBtn
            color={errors.picture ? "#ff2b77" : null}
            onClick={() => setValue("picture", "")}
          >
            <GrClose />
          </CleanupBtn>
          {errors.picture && <Error>{errors.picture.message}</Error>}
        </FormLabel>
        <FormLabel>
          Priority
          <Controller
            name="priority"
            control={control}
            rules={{ required: "Please, select a priority" }}
            render={({ field, fieldState }) => (
              <>
                <Dropdown
                  id={field.name}
                  options={[
                    { name: "High" },
                    { name: "Medium" },
                    { name: "Low" },
                  ]}
                  value={field.value}
                  optionLabel="name"
                  className={fieldState.invalid ? "error" : ""}
                  onChange={(e) => {
                    field.onChange(e.value);
                  }}
                />
              </>
            )}
          />
          {errors.priority && <Error>{errors.priority.message}</Error>}
        </FormLabel>
      </Container>
      <EventFormButton type="submit">{btnName}</EventFormButton>
      <ToastContainer />
    </Form>
  );
};

export default EventForm;
