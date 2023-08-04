import { faker } from "@faker-js/faker";
import { Customer } from "./types";

function createRandomUser(): Customer {
  const sex = faker.person.sexType();

  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  const city = faker.location.city();
  const registeredDate = faker.date
    .between({
      from: "2010-01-01T00:00:00.000Z",
      to: "2023-08-01T00:00:00.000Z",
    })
    .toJSON();

  return {
    id: faker.string.uuid(),
    email,
    firstName,
    lastName,
    city,
    registeredDate,
  };
}

export const createCustomers = () => {
  return [...new Array(500)].map((el) => createRandomUser());
};
