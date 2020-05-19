import supertest from "supertest";
import app from "../app";
const request = supertest(app);

it("Node.js server should be up and running", async (done) => {
  const response = await request.get("/")

  expect(response.status).toBe(200);
  done();
});