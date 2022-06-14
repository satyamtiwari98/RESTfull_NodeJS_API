import { addNewContact, getContact, getContactWithId, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Middleware
            console.log(`Request from: ${req.originalurl}`)
            console.log(`Request type: ${req.method}`);
            next();

        }, getContact)

        // Post endpoint
        .post(addNewContact)


    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithId)
        // updating a specific contact
        .put(updateContact)
        // Deleting a specific contact
        .delete(deleteContact)

}

export default routes;