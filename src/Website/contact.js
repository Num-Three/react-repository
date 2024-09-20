import 'bootstrap/dist/js/bootstrap.min.js'

const Contact = () => {
    return (
        <div class="py-5 container"id="Contact">
            <h1 class="text-center">Contact Me</h1>

            <form id="contactform">
                <div class="form-group">
                    <label for="" class="form-label">Name</label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        required />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Email</label>
                    <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                        placeholder="abc@mail.com" required />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Message</label>
                    <label for="" class="form-label"></label>
                    <textarea class="form-control" name="" id="" rows="3" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>

            </form>
        </div >

    )
}

export default Contact;