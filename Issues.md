Frontend: 6. In Auth sign up, The name is not dynamic - Fixed 2. When we enter url consultants/123 -> means consultant with id 3 it should redirect back to consultants 3. Should we try to store some cookies so that we dont need to api call every time there is a request for getting a page in next in middlewate?

HIGH:

1. When verify otp do not use redirect use router.push - Fixed
2. Consultant should not be able to book his own appointment

3. Consultants are not allowed visit /consultants but allowed to /consultant as it starts with it in array search.
4. When consultant status is pending or rejected header is find on / but when go to /consultant (dashboard) the link in header changes from Verification to dashboard
5. Dynamically getting token and admin it to axios headers and if token expires error comes then redirect to sign in again
6. Dynamic error and response using inceptors.response axios
7. As soon as backend turns of the authentication is so harsh that it immediately redirects to sign-in

Backend:

1. booked and expired availabilities are being sent in the frontend
2. have to deal with required true with the consultantProfile thing
3. Add pagination in getbookings
4. Only scheduled appointments should not be sent as availability but cancelled will be shown

Fixed:

1. Student cant go to consultants page to find out consultants - Fixed
2. When status of consultant is rejected or pending it is redirected too many times - fixed(checked if we have reached the desired url then dont redirect)
3. Add experience in schema of consultant profile - Added (in consultantProfile schema)
