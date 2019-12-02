import React from 'react';

/* created a  footer functional component for footer bottom at webpage and it returns 
my social media links
 */

function Footer() {
    return (
        /* <footer>
             <p>Follow us:</p>
             <p>Instagram</p>
             <a href="https://www.instagram.com/?hl=en">@PenPowers</a>
             <p>Twitter</p>
             <a href="https://twitter.com/">@Pen.Powers</a>
             <p>
             Created my free logo at logomakr.com
             </p>
         </footer> 
         */

        <footer class="page-footer font-small cyan darken-3">
            {/* Footer Elements*/}


            <div class="container">


                {/* Footer Grid row*/}
                <div class="row">

                    {/* Footer Grid column*/}
                    <div class="col-md-12 py-5">
                        <div class="mb-5 flex-center">

                            {/* Facebook logo*/}
                            <a class="fb-ic" >
                                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">

                                </i>

                            </a>

                            {/* Twitter logo*/}
                            <a class="tw-ic" >
                                <i class="fab fa-twitter-f fa-lg white-text mr-md-5 mr-3 fa-2x">

                                </i>

                            </a>
                            {/* Google plus logo*/}
                            <a class="gplus-ic" >
                                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">

                                </i>

                            </a>
                            {/* Linkedin logo*/}
                            <a class="li-ic" >
                                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">

                                </i>

                            </a>
                            {/* Instagram vlogo*/}
                            <a class="ins-ic" >
                                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">

                                </i>

                            </a>





                        </div>
                    </div>


                </div>






            </div>






        </footer>
    )
}

export default Footer;