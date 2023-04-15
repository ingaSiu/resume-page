import { projectData } from '../data/projectData';

export const getData = () => {
  return projectData;
};

export const getProject = (id) => {
  return projectData.find((item) => item.id === id);
};
