import React from "react";

export default function Search() {
  return (
    <div>
      <main class="h-100">
        <div class="m-0 row h-100 d-flex justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <div class="container_search my-5">
              <form class="form-inline my-2 my-lg-0">
                <div class="row">
                  <div class="col-md-10">
                    <input
                      class="form-control mr-sm-2 mb-2"
                      type="search"
                      placeholder="Search Subjects"
                      aria-label="Search"
                    />
                  </div>
                  <div class="col-md-2">
                    <button
                      class="btn btn-outline-success my-sm-0 w-100"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
