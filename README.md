# Kanban-Server

**Membuat task (Create task)**
----
  Returns json data about a single todo task that recently added.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "category": "To-Do", ​"​​title": "Create DB"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{"tasks": { "category": "To-Do", "​​​id": 1, ​"​​title": "Create DB", ​"userId": 1 }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [{ message: "Invalid request."}] }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{message: "Internal Server Error."}] }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```
 -----------------------------------------------------------------------------------

**Mengambil semua data task (Read task)**
----
  Returns json data about multiple task that already exists in database.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "tasks": [ { "id": 2, "title": "DB Programming with SQL", "category": "On-Going", "createdAt": "2020-04-08T13:55:40.209Z", "updatedAt": "2020-04-08T14:16:12.856Z", "userId": 1 }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{ message: "Internal Server Error."}] }`

 **Request Header:**
 ```javascript
 {  
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```
 -----------------------------------------------------------------------------------

 **Mengubah data task (Update task)**
----
  Returns message of data update.

* **URL**

  /tasks/:id?type=category

  OR

  /tasks/:id?type=title

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

```javascript
 {
      "category": "To-Do", ​"​​title": "Create DB"
 }
 ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "message": "Data successfully updated" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ errors : [{ message: "Error Not Found."}]}`

     OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [{ message: "Invalid request." }] }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{ message: "Internal Server Error." }] }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```


 -----------------------------------------------------------------------------------

  **Menghapus data todo (Delete todo)**
----
  Returns json data about a single todo task that recently deleted.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ message: "Task successfully deleted." }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ errors : [{ message: "Error Not Found."}] }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{ message: "Internal Server Error." }] }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```
 -----------------------------------------------------------------------------------

 **Membuat user (Create user)**
----
  Returns json data about a single user that recently added.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : "Internal Server Error." }`

 -----------------------------------------------------------------------------------

  **Signin user**
----
  Returns json data about a single user that recently signed in.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "12345678"
 }
 ```

* **Success Response:**

  * **Code:** 200 Ok <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [{ message: "Invalid request."}] }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{ message: "Internal Server Error." }] }`

 -----------------------------------------------------------------------------------

  **Signin user (google)**
----
  Returns json data about a single user that recently signed in or signed up.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`

    OR

  * **Code:** 200 Ok <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [{ message: "Invalid request." }] }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ errors : [{ message: "Internal Server Error." }] }`

 -----------------------------------------------------------------------------------
 