import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-jest-id" }); // замена id по умолчанию
