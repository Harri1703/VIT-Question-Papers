import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function AddPaper() {
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main class="container pt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div class="row gy-3 mb-3">
          <div class="col-md-6">
            <div class="form-floating m-0">
              <input
                type="text"
                id="subjectname"
                placeholder="e.g. Data Structures and Algorithms"
                class="form-control"
                required
              />
              <label for="subjectname">Subject Name</label>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter a subject name.</div>
            </div>
          </div>
          <div class="col-md-6">
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-lg example"
              required
            >
              <option value="">--choose year--</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a year.</div>
          </div>
        </div>
        <div class="row gy-3 mb-3">
          <div class="col-md-6">
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-lg example"
              required
            >
              <option value="">--choose examination--</option>
              <option value="cat1">CAT 1</option>
              <option value="cat2">CAT 2</option>
              <option value="fat">FAT</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose an examination.</div>
          </div>

          <div class="col-md-6">
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-lg example"
              required
            >
              <option value="">--choose slot--</option>
              <option value="a1">A1</option>
              <option value="a2">A2</option>
              <option value="b1">B1</option>
              <option value="b2">B2</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a slot.</div>
          </div>
        </div>
        <div class="row gy-3 mb-3">
          <div class="col-md-6">
            <div class="form-floating m-0">
              <input
                type="text"
                id="facultyname"
                placeholder="e.g. Murugan"
                class="form-control"
              />
              <label for="facultyname">Faculty Name (optional)</label>
            </div>
          </div>
          <div class="col-md-6">
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-lg example"
              required
            >
              <option value="">--choose school--</option>
              <option value="scope">SCOPE</option>
              <option value="smec">SMEC</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a school.</div>
          </div>
        </div>
        <div class="row mb-3 gy-3 justify-content-center">
          <div class="col-md-3">
            <input
              class="form-control form-control-lg"
              id="formFileLg"
              type="file"
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a file.</div>
          </div>
        </div>
        <div class="row gy-3 justify-content-center">
          <div class="col-md-8">
            <button type="submit" class="btn btn-primary w-100">
              Send for verification
            </button>
          </div>
        </div>
      </Form>
    </main>
  );
}
