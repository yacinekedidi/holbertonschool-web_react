import { normalize, schema } from "normalizr";

const courses = new schema.Entity("courses");

const coursesNormalizer = (data) => normalize(data, [courses]);

export default coursesNormalizer;
