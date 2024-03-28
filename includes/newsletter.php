<section class="newsletter">
    <div class="container">
        <!-- Newsletter sign-up -->
        <div>
            <form method="POST" action="#" id="sign-up" class="form-sign-up">
                <h2>Email Newsletter Sign-Up</h2>
                <div class="form-sign-up__fields">
                    <div class="form-sign-up__group">
                        <!-- These inner spans with the * are a short term implementation -->
                        <label for="newsletter-name" class="">Your Name <span style="color: #d24d57"> *</span></label>
                        <input id="newsletter-name" name="name" type="text" value />
                    </div>
                    <div class="form-sign-up__group">
                        <label for="newsletter-email" class="">Your Email <span style="color: #d24d57"> *</span></label>
                        <input id="newsletter-email" name="email" type="email" value />
                    </div>
                </div>
                <div class="checkbox-container">
                    <label class="checkbox-container">
                        <span class="checkbox-draw checkbox-draw__unchecked">
                            <input class="check" type="checkbox" />
                            <span class="icon-checkmark"></span>
                        </span>
                        <span class="label-text">
                            Please tick this box if you wish to receive marketing
                            information from us. Please see our
                            <a>Privacy Policy</a> for more information on how we keep
                            your data safe.
                        </span>
                    </label>
                </div>
                <a class="btn"> SUBSCRIBE </a>
            </form>
        </div>
    </div>
</section>