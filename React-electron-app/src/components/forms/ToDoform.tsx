import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TextField from "../common/TextField";
import Button from "../common/Button";
export interface Ivalue {
  description: string;
}

export interface ITASK {
  id: number;
  description: string;
  completed: boolean;
}

interface Props {
  addItemTodo: (newTask: ITASK) => void;
}

const ToDoForm: React.FC<Props> = ({ addItemTodo }) => {
  const ipcRenderer = (window as any).ipcRenderer;

  const initialvalue: Ivalue = {
    description: "",
  };

  const onSubmit = (values: Ivalue) => {
    console.log("form values", values);
    addItemTodo(values as ITASK);
    ipcRenderer.send("submit:todoForm", values);
  };
  const validateSchema = Yup.object().shape({
    description: Yup.string()
      .required("Description is required")
      .min(3, "Minimum 3 characters required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialvalue}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <Form className="shadow border rounded-xl p-4 my-4">
          <div className="my-4">
            <label htmlFor="description" className="font-bold label">
              <span className="label-text">Task Description</span>
            </label>

            <Field
              name="description"
              id="description"
              className="px-2 py-3 mt-2 mb-2 border rounded shadow-sm w-full"
              placeholder="Enter the description"
              autoFocus={true}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          {<Button text="Add" />}
        </Form>
      </Formik>
    </div>
  );
};

export default ToDoForm;
function resetForm() {
  throw new Error("Function not implemented.");
}
