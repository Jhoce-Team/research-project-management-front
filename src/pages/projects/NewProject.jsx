import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_PROJECT } from "../../graphql/projects/projectsMutations";
import useFormData from "../../hooks/useFormData";

const NewProject = () => {
  const {
    data: createProjectData,
    loading: createProjectLoading,
    error: createProjectError,
  } = useMutation(CREATE_PROJECT);
  const { form, formData, updateFormData } = useFormData;
  const submitForm = (e) => {
    e.preventDefault();
    createProjectData({
      variables: { ...formData },
    });
  };
  return <main>
      
  </main>
  ;
};

export default NewProject;
