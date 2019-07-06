(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 0px;\">\n    <nav class=\"navbar navbar-default\" style=\"padding: 15px;\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-2\">\n                    <div class=\"navbar-header\" style=\"width: 100%;\">\n                        <a class=\"navbar-brand\" href=\"/\" style=\"text-align: center; width: 100%; font-size: 20px\"><b>VOIZFONICA</b></a\n            >\n          </div>\n        </div>\n        <div class=\"col-md-7\">\n          <ul class=\"nav navbar-nav\" style=\"display: inline\">\n            <li\n              *ngFor=\"let menuitem of menuitems; let i = index\"\n              [class.active]=\"selectedmenu == i + 1\"\n              (click)=\"selectMenu(i + 1)\"\n            >\n              <a routerLink=\"/{{ menuitem.path }}\">{{ menuitem.name }}</a>\n                        </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <button class=\"btn btn-primary\" style=\"margin: 8px;\" routerLink=\"/login\">\n            Login\n          </button>\n                        <button class=\"btn btn-info\" style=\"margin: 8px;\" routerLink=\"/register\">\n            Sign up\n          </button>\n                        <span style=\"margin:8px\">\n\n          </span>\n                    </div>\n                </div>\n            </div>\n    </nav>\n    </div>\n\n    <div class=\"container\" style=\"padding: 25px;\">\n        <div *ngIf=\"ishome()\">\n            <app-splash></app-splash>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"jumbotron\" style=\"padding: 30px; margin: 0px\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                Copyright &copy; VoizFonica Inc,.\n            </div>\n            <div class=\"col-md-4\">\n                <a href=\"#\" style=\"margin-right:20px\">Terms and Conditions</a>\n                <a href=\"#\" style=\"margin-right:20px\">Login</a>\n                <a href=\"#\" style=\"margin-right:20px\">Sitemap</a>\n\n            </div>\n\n        </div>\n    </div>\n\n    <app-floating-search-bar></app-floating-search-bar>\n    <app-chat-float></app-chat-float>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-support/chat-support.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-support/chat-support.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div id=\"quick_chatbox\" class=\"container\">\n    <div id=\"select_op_head\"><b>RAISE A QUICK TICKET</b></div>\n    <br>\n    <div class=\"row\">\n        <div *ngFor=\"let row of rows\" class=\"col-md-3\">\n            <button id=\"chat_init\" class=\"btn-primary\">\n                            {{row}}\n                        </button>\n        </div>\n    </div>\n    <br>\n</div>\n<br>\n<div id=\"chatbox\" class=\"container\">\n    <div id=\"select_op_head\"><b>CHAT HISTORY</b></div>\n    <div class=\"row\" *ngFor=\"let msg of msgs\">\n        <div class=\"col-md-6\"></div>\n        <div class=\"col-md-6\">\n            <div id=\"message_item\">\n                {{msg}}\n            </div>\n        </div>\n    </div>\n    <br>\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f)\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <input class=\"form-control\" type=\"text\" name=\"message_box\" id=\"message_box\" [(ngModel)]=\"message_box\">\n            </div>\n            <div class=\"col-md-3\">\n                <br>\n                <button id=\"sub\" class=\"btn-primary\">Send</button>\n            </div>\n        </div>\n    </form>\n    <br>\n    <br>\n</div>\n<app-transactions></app-transactions>\n<br>\n<br>\n<div id=\"ticket_history\" class=\"container\">\n    <div id=\"tickets_heading\">\n        TICKETS\n    </div>\n    <br>\n    <table border=\"1\" id=\"ticket_register\" class=\"center\">\n        <tr>\n            <th>\n                S.No.\n            </th>\n            <th>\n                Ticket Id.\n            </th>\n            <th>\n                Date\n            </th>\n            <th>\n                Time\n            </th>\n            <th>\n                State\n            </th>\n            <th>\n                Reason to take action\n            </th>\n            <th>\n                Action on ticket\n            </th>\n        </tr>\n        <tr *ngFor=\"let ticketdet of ticketdets\">\n            <td>\n                {{ticketdet.sno}}\n            </td>\n            <td>\n                {{ticketdet.tid}}\n            </td>\n            <td>\n                {{ticketdet.date}}\n            </td>\n            <td>\n                {{ticketdet.time}}\n            </td>\n            <td>\n                {{ticketdet.state}}\n            </td>\n            <td>\n                <input type=\"text\">\n            </td>\n            <td *ngIf=\"ticketdet.state=='open'\">\n                <button class=\"btn-primary\">\n                    Close ticket\n                </button>\n            </td>\n            <td *ngIf=\"ticketdet.state=='closed'\">\n                <button class=\"btn-primary\">\n                    Open ticket\n                </button>\n            </td>\n        </tr>\n    </table>\n    <br>\n    <br>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"padding: 20px\">\n\n    <div class=\"row\">\n        <div class=\"col-md-3 \">\n            <div class=\"card\" style=\"width: 18rem;background-color: white; border-radius: 20px; text-align: center; box-shadow: black 2px 2px 5px; padding: 10px; width: 100%\">\n\n                <img class=\"card-img-top\" src=\"assets/user.png\" style=\"width: 150px; height: 150px;\" alt=\"Card image cap\">\n\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><i>Customer since 2015</i></h5>\n                    <hr/>\n                    <div class=\"card-text\">\n                        <p style=\"font-size: 15px\"> <b>USER FULL NAME</b> </p>\n                        <p style=\"font-size: 15px\"> -- 9999999999 -- </p>\n                        <p style=\"font-size: 15px\">\n                            <fa name=\"map-marker\"></fa> Chennai\n                        </p>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\" style=\"text-align: center\">\n                            <a href=\"#\" class=\"btn btn-primary\">Recharge</a>\n                        </div>\n                        <div class=\"col-md-6\" style=\"text-align: center\">\n                            <a href=\"#\" class=\"btn btn-info\">Support</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"col-md-3 card\" style=\"width: 100%; background-color: white; border-radius: 5px; text-align: center; box-shadow: black 2px 2px 5px; padding: 20px; padding: 8px;text-align: center\">\n                <div class=\"row\" style=\"margin-left: 15px; padding-bottom: 25px\">\n                    <div class=\"col-md-3\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 card\" style=\"width: 20rem; background-color: white; border-radius: 5px; text-align: center; box-shadow: black 2px 2px 5px; margin: 8px; padding: 8px;text-align: center\">\n                                <b>Current plan</b>\n                                <br/>\n\n                                <h2>399 plan</h2>\n                                Expires on 02-Jul-2019 <br/><br/>\n\n                            </div>\n                            <div class=\"col-md-3 card\" style=\"width: 20rem; background-color: white; border-radius: 5px; text-align: center; box-shadow: black 2px 2px 5px; margin: 8px; padding: 8px;text-align: center\"><b>Current data usage</b>\n                                <br/> <br/>70% of 500MB used on 9876543210<br/>\n                                <div class=\"progress\" style=\"margin-top: 10px;\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%\">70%</div>\n                                </div>\n                                <button class=\"btn btn-default\">Check data usage</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-7 card\" style=\"background-color: white; border-radius: 5px; text-align: center; box-shadow: black 2px 2px 5px; margin: 8px; padding: 8px;text-align: center\">\n                        <h4><b>Dashboard</b> </h4>\n                        <br/>\n                        <div style=\"text-align: left; padding: 20px\">\n                            <b>Name: </b> XXXXX <br/><br/>\n                            <b>Email-ID </b> xxxx@yyy.com<br/><br/>\n                            <b>Primary mobile number </b> 9876543210<br/><br/>\n                            <b>Last transaction: </b> 15-Jun-19<br/><br/>\n                        </div>\n                        <button class=\"btn btn-primary\">Change password</button><br/>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"jumbotron\" style=\"padding: 20px; text-align: center\">\n    <h3>\n        My accounts\n    </h3><br/>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-3 card\" *ngFor=\"let item of listofaccounts\" style=\"width: 24rem; background-color: white; border-radius: 5px; text-align: center; box-shadow: black 2px 2px 5px; margin: 8px; padding: 8px;text-align: center\">\n                    <b style=\"font-size: 15px\"><fa name=\"{{item.accounticon}}\"></fa> {{item.accounttype}}</b>\n                    <hr/> <b>Account number:</b> {{item.accountnumber}} <br/>\n                    <b>Division:</b> {{item.division}} <br/>\n                    <h3>\n                        ₹ {{item.dueamount}}</h3>\n                    <div [ngSwitch]=\"item.accounttype\">\n                        <div *ngSwitchCase=\"'Prepaid Mobile'\">\n                            <button class=\"btn btn-success\">Recharge now</button>\n                        </div>\n                        <div *ngSwitchDefault>\n                            <button class=\"btn btn-success\">Pay now</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/devices/devices.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/devices/devices.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>devices works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"active\"></li>\n            </ol>\n\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\">\n\n                <div class=\"item \">\n                    <img src=\"assets/commy3.png\" alt=\"Keyboard\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n\n                    </div>\n                </div>\n\n                <div class=\"item\">\n                    <img src=\"assets/commy2.jpg\" alt=\"Keyboard2\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n                        <!-- <p style=\"color:rgb(255, 255, 255)\"><b>SECURE COMMUNICATION</b></p> -->\n                    </div>\n                </div>\n\n                <div class=\"item active\">\n                    <img src=\"assets/commy.jpg\" alt=\"Keyboard3\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Left and right controls -->\n            <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-6\" style=\"padding-top:0px;padding-left:100px\">\n        <div class=\"card\" style=\"box-shadow: black 2px 2px 5px; padding: 10px\">\n            <article class=\"card-body mx-auto\" style=\"padding: 50px\">\n                <h4 class=\"card-title mt-3 text-center\">LOGIN</h4>\n                <p class=\"text-center\">Login to your voizfonica account</p>\n                <br/>\n                <form #f=\"ngForm\" (ngSubmit)=\"validate(f)\" id=\"contact-form\" method=\"post\" action=\"contact.php\" role=\"form\">\n                    <div class=\"messages\"></div>\n                    <div class=\"controls\">\n                        <div class=\"row\">\n                            <div class=\"\" style=\"padding-top:0px;text-align: center\">\n                                <div class=\"form-group\">\n\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"user_email\" [(ngModel)]=\"user_email\" #email=\"ngModel\" email required>\n\n                                    <br>\n                                    <div *ngIf=\"(f.submitted || (email.dirty || email.touched)) && email.invalid \">\n                                        <div *ngIf=\"email.errors.required\" class=\"error\">\n                                            Username is required!\n                                        </div>\n                                        <div *ngIf=\"email.errors.email && !email.errors.required\" class=\"error\">\n                                            Please enter the valid email ID\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"help-block with-errors\"></div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"\" style=\"padding-top:0px;text-align: center\">\n                                <div class=\"form-group\">\n\n                                    <input id=\"form_phone\" type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" #password>\n                                    <div class=\"help-block with-errors\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\" style=\"padding-top:0px;text-align: center\">\n                                <p style=\"text-align: center\">\n                                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" (click)=\"func(email, password)\">\n\n                                </p>\n\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </article>\n        </div>\n        <script src='https://www.google.com/recaptcha/api.js'></script>\n\n        <!-- card.// -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offers/offers.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offers/offers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"box-shadow: black 2px 2px 5px\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators \">\n        <li data-target=\"#myCarousel \" data-slide-to=\"0 \"></li>\n        <li data-target=\"#myCarousel \" data-slide-to=\"1 \"></li>\n        <li data-target=\"#myCarousel \" data-slide-to=\"2 \" class=\"active \"></li>\n    </ol>\n\n    <div class=\"carousel-inner \">\n\n        <div class=\"item active \">\n            <img src=\"assets/offer.png \" alt=\"Keyboard \" style=\"width:100%; \">\n            <div class=\"carousel-caption \">\n            </div>\n        </div>\n\n        <div class=\"item \">\n            <img src=\"assets/image2.png \" alt=\"Keyboard2 \" style=\"width:100%; \">\n            <div class=\"carousel-caption \">\n\n                <p style=\"color:rgb(255, 255, 255) \"><b>SECURE COMMUNICATION</b></p>\n            </div>\n        </div>\n\n        <div class=\"item \">\n            <img src=\"assets/home_broadband.png \" alt=\"Keyboard3 \" style=\"width:100%; \">\n            <div class=\"carousel-caption \">\n                <p style=\"color:rgb(255, 255, 255) \"><b>HIGH SPEED CONNECTIVITY</b></p>\n                <!-- <p style=\"color:rgb(12, 6, 6) \"><b></b></p> -->\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control \" data-slide=\"prev \">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n        <span class=\"sr-only \">Previous</span>\n    </a>\n    <a class=\"right carousel-control \" data-slide=\"next \">\n        <span class=\"glyphicon glyphicon-chevron-right \"></span>\n        <span class=\"sr-only \">Next</span>\n    </a>\n</div>\n<br/><br/>\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <div class=\"callout callout-default\" style=\"text-align:center\">\n            <h3>PRIME MEMBERSHIP</h3>\n\n\n            <img src=\"assets/Prime_0.png\" style=\"height:150px; width: 150px\"><br>\n            <br>\n            <ul type=\"none\">\n                <li>\n                    <i class=\"fa fa-hand-o-right\" aria-hidden=\"true\"> ANYWHERE ANYTIME DATA</i>\n                </li>\n                <li><i class=\"fa fa-hand-o-right\" aria-hidden=\"true\">ULTRA FAST DATA SPEED</i></li>\n            </ul>\n\n\n        </div>\n\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"callout callout-default\" style=\"text-align:center\">\n            <h3>EXCLUSIVE OFF!!</h3>\n            <img src=\"assets/discount.png\" style=\"height:100px; width: 70px\">\n            <ul type=\"none\">\n                <li>\n                    <i class=\"fa fa-hand-o-right\" aria-hidden=\"true\">30% DISCOUNT FOR POSTPAID CUSTOMERS</i>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"callout callout-default\" style=\"text-align:center\">\n            <h3>RECHARGE FOR Rs. 200</h3>\n            <img src=\"assets/recharge.png\" style=\"height:150px; width: 200px\"><br>\n            <br>\n            <ul type=\"none\">\n                <li>\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\">GET UNLIMITED VOICE CALLS</i>\n                </li>\n                <li><i class=\"fa fa-phone\" aria-hidden=\"true\">1 GB / DAY</i></li>\n            </ul>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-initiator/payment-initiator.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-initiator/payment-initiator.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"payment\" class=\"container\">\n    <div id=\"payment_heading\">\n        PAYMENT\n    </div>\n    <div id=\"payment_content\">\n        Please select your preferred mode of payment\n        <br>\n        <br>\n        <form>\n            <div class=\"radio\">\n                <label><input [(ngModel)]=\"payment_mode\" type=\"radio\" name=\"payment_mode\" value=\"1\">&nbsp;Credit card / Debit card</label>\n            </div>\n            <div class=\"radio\">\n                <label><input [(ngModel)]=\"payment_mode\" type=\"radio\" name=\"payment_mode\" value=\"2\">&nbsp;Net banking</label>\n            </div>\n            <div class=\"radio\">\n                <label><input [(ngModel)]=\"payment_mode\"  type=\"radio\" name=\"payment_mode\" value=\"3\">&nbsp;Other wallets</label>\n            </div>\n        </form>\n        <br>\n        <br>\n        <div *ngIf=\"payment_mode==1\" id=\"card_payment\" class=\"container\">\n            <div id=\"card_payment_heading\">\n                CREDIT & DEBIT CARDS\n            </div>\n            <form #f=\"ngForm\" (ngSubmit)=\"validate(f)\">\n                <div id=\"card_payment_content\">\n                    <b>Please enter your card details</b>\n                    <br>\n                    <br>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-md-4\">\n\n                            Card number\n                            <input type=\"text\" pattern=\"^[0-9]*$\" class=\"form-control\" [(ngModel)]=\"card_number\" #card_number1=\"ngModel\" name=\"card_number\" required minlength=\"12\" maxlength=\"12\">\n                            <br>\n                            <div class=\"error\" *ngIf=\"((f.submitted) || (card_number1.touched)) && (!card_number1.valid)\">\n                                Enter proper card number!!!<br><br>\n                            </div>\n                            Name on the card\n                            <input pattern=\"^[a-zA-z ]*$\" type=\"text\" class=\"form-control\" [(ngModel)]=\"card_name\" #card_name1=\"ngModel\" name=\"card_name\" required>\n                            <br>\n                            <div class=\"error\" *ngIf=\"((f.submitted) || (card_name1.touched)) && (!card_name1.valid)\">\n                                Enter proper card name!!!<br><br>\n                            </div>\n                            CVV number\n                            <input type=\"text\" pattern=\"^[0-9]*$\" class=\"form-control\" [(ngModel)]=\"card_cvv\" #card_cvv1=\"ngModel\" name=\"card_cvv\" required maxlength=\"3\" minlength=\"3\">\n                            <br>\n                            <div class=\"error\" *ngIf=\"((f.submitted) || (card_cvv1.touched)) && (!card_cvv1.valid)\">\n                                Enter proper card cvv number!!! <br><br>\n                            </div>\n                            Expiration date\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"card_expiry\" name=\"card_expiry\" #card_expiry1=\"ngModel\" required>\n                            <br>\n                            <div class=\"error\" *ngIf=\"((f.submitted) || (card_expiry1.touched)) && (!card_expiry1.valid)\">\n                                Enter proper date!!! <br><br>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <input type=\"radio\" name=\"card_type\" checked> &nbsp;\n                            <img src=\"../../assets/images/visa.png\" height=\"50\" width=\"50\">\n                            <br>\n                            <br>\n                            <input type=\"radio\" name=\"card_type\"> &nbsp;\n                            <img src=\"../../assets/images/mastercard.jpg\" height=\"50\" width=\"50\">\n                        </div>\n\n                    </div>\n                    <br>\n                    <button type=\"submit\" class=\"btn-primary\" id=\"card_make_payment\">Make payment</button>\n                    <br>\n                    <br>\n\n                </div>\n            </form>\n        </div>\n        <div *ngIf=\"payment_mode==2\" id=\"redirection_net_banking\" class=\"container\">\n            <div id=\"net_banking_heading\">\n                NET BANKING\n            </div>\n            <br>\n            <b>Please select the preferred bank</b>\n            <br>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <br>\n\n                    <select>\n                    <option>\n                        ICICI bank\n                    </option>\n                    <option>\n                        State Bank of India\n                    </option>\n                    <option>\n                        Axis Bank\n                    </option>\n                    <option>\n                        HDFC Bank\n                    </option>\n                </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <img src=\"../../assets/images/billdesk.jpg\" height=\"50px\" width=\"100px\">\n                </div>\n            </div>\n            <br>\n            <br>\n            <b>Note: You will be redirected for the payment ...</b>\n            <br>\n            <button class=\"btn-primary\" id=\"redirect_accept\">Ok</button>\n            <br>\n            <br>\n        </div>\n        <div *ngIf=\"payment_mode==3\" id=\"redirection_wallets\" class=\"container\" style=\"width: 100%\">\n            <div id=\"wallets_heading\">\n                WALLETS\n            </div>\n            <br>\n            <b>Please select the preferred bank</b>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <input type=\"radio\" name=\"wallet_options\"> <img src=\"../../assets/images/phonepe.png\" height=\"50px\" width=\"100px\">\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"radio\" name=\"wallet_options\"> <img src=\"../../assets/images/paytm.png\" height=\"50px\" width=\"100px\">\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"radio\" name=\"wallet_options\"> <img src=\"../../assets/images/amazon.png\" height=\"50px\" width=\"100px\">\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"radio\" name=\"wallet_options\"> <img src=\"../../assets/images/google.png\" height=\"50px\" width=\"100px\">\n                </div>\n            </div>\n            <br>\n            <b>Note: You will be redirected for the payment ...</b>\n            <button class=\"btn-primary\" id=\"redirect_accept\">Ok</button>\n\n        </div>\n    </div>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recharge/recharge.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recharge/recharge.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"padding: 20px; text-align: center\">\r\n    <h3>\r\n        Recharge </h3><br/>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 \">\r\n\r\n\r\n\r\n                    <div class=\"panel with-nav-tabs panel-default \" style=\"margin-bottom: 0px; padding-bottom: 0px;box-shadow: black 2px 2px 5px \">\r\n                        <div class=\"panel-heading \">\r\n                            <ul class=\"nav nav-tabs \">\r\n                                <li class=\"ntab\"><a><button class=\"tab_button\" (click)=\"activate('1')\">Prepaid</button></a></li>\r\n                                <li class=\"ntab\"><a><button class=\"tab_button\" (click)=\"activate('2')\">Postpaid</button></a></li>\r\n                                <li class=\"ntab\"><a><button class=\"tab_button\" (click)=\"activate('3')\">Dongle</button></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"panel-body \" style=\"margin-top: 0px; padding: 0px; box-shadow: black 2px 2px 5px \">\r\n                        <div class=\"tab-content \" style=\"background:rgb(214, 214, 214) \">\r\n                            <!---->\r\n                            <div *ngIf=\"value_tab=='1'\" id=\"tab1default \" style=\"padding:20px; \">\r\n                                <form #f=\"ngForm\" (ngSubmit)=\"validate(f)\">\r\n                                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:20px;padding-bottom:10px;\">\r\n                                        <h2>Choose the best plan that suits you</h2><br/>\r\n                                        <input type=\"text \" pattern=\"^[0-9]*$\" class=\"form-control\" placeholder=\"Phone number\" minlength=10 maxlength=10 [(ngModel)]=\"phn\" #phn1=\"ngModel\" name=\"phn\" required style=\" display: inline ; width: 200px;  margin-right: 25px;\" />\r\n                                        <input type=\"text \" class=\"form-control\" placeholder=\"Circle\" style=\" display: inline ; width: 200px; margin-right: 25px;\" /><input type=\"number \" class=\"form-control\" placeholder=\"Amount\" style=\" display: inline ; width: 200px; margin-right: 25px;\"\r\n                                        /><button type=\"button \" (click)=\"activate2('4')\" class=\"btn btn-info \">Browse plans</button>\r\n                                        <div class=\"error\" *ngIf=\"((f.submitted) || (phn1.touched)) && (!phn1.valid)\">\r\n                                            Enter proper phone number!!! <br><br>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n\r\n                                <div class=\"form-group\" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary\" routerLink=\"/payment\">Proceed to recharge</button></div>\r\n                                <div *ngIf=\"value_tab2=='4'\">\r\n                                    <app-viewplans></app-viewplans>\r\n                                </div>\r\n                            </div>\r\n                            <!---->\r\n                            <div *ngIf=\"value_tab=='2'\" id=\"tab2default \" style=\"padding-top:20px; \">\r\n\r\n                                <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:20px;padding-bottom:10px;\">\r\n                                    <h2>Choose pack based on your usage</h2><br/>\r\n                                    <input type=\"text \" class=\"form-control\" placeholder=\"Phone number\" style=\" display: inline ; width: 200px;  margin-right: 25px;\" />\r\n                                    <input type=\"text \" class=\"form-control\" placeholder=\"Circle\" style=\" display: inline ; width: 200px; margin-right: 25px;\" /><input type=\"number \" class=\"form-control\" placeholder=\"Amount\" style=\" display: inline ; width: 200px; margin-right: 25px;\"\r\n                                    /><button type=\"button \" (click)=\"activate3('4')\" class=\"btn btn-info \">Browse plans</button>\r\n\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"form-group\" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary \">Proceed to recharge</button></div>\r\n                                <br>\r\n                                <div *ngIf=\"value_tab3=='4'\">\r\n                                    <app-viewplans></app-viewplans>\r\n                                </div>\r\n                            </div>\r\n                            <!---->\r\n                            <div *ngIf=\"value_tab=='3'\" id=\"tab3default \" style=\"padding-top:20px; \">\r\n                                <table>\r\n                                    <tr>\r\n                                        <th>\r\n                                            <div class=\"form-group \" style=\"padding-left:20px;padding-right:20px;padding-top:0px;padding-bottom:0px \">Switch to VoizFonica</div>\r\n                                        </th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:20px;padding-bottom:10px \">MOBILE : +91 </div>\r\n                                        </td>\r\n                                        <th>\r\n                                            <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:20px;padding-bottom:10px \"><input type=\"text \"></div>\r\n                                        </th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td>\r\n                                            <div class=\"form-group\" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary \">Proceed to recharge</button></div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"active\"></li>\n            </ol>\n\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\">\n\n                <div class=\"item \">\n                    <img src=\"assets/commy3.png\" alt=\"Keyboard\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n\n                    </div>\n                </div>\n\n                <div class=\"item\">\n                    <img src=\"assets/commy2.jpg\" alt=\"Keyboard2\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n                        <!-- <p style=\"color:rgb(255, 255, 255)\"><b>SECURE COMMUNICATION</b></p> -->\n                    </div>\n                </div>\n\n                <div class=\"item active\">\n                    <img src=\"assets/commy.jpg\" alt=\"Keyboard3\" style=\"height:400px\">\n                    <div class=\"carousel-caption\">\n\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Left and right controls -->\n            <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-6\" style=\"padding-top:0px;padding-left:100px\">\n        <div class=\"card\" style=\"box-shadow: black 2px 2px 5px; padding: 10px\">\n            <article class=\"card-body mx-auto\" style=\"max-width: 400px;\">\n                <h4 class=\"card-title mt-3 text-center\">Create Account</h4>\n                <p class=\"text-center\">Get started with your free account</p>\n\n                <form #f=\"ngForm\" (ngSubmit)=\"validate(f)\">\n                    <div class=\"form-group input-group\">\n\n                        <input name=\"\" class=\"form-control\" placeholder=\"First Name\" type=\"text\" required>\n\n\n                        <input name=\"\" class=\"form-control\" placeholder=\"Last Name\" type=\"text\" required>\n\n\n                        <input name=\"\" class=\"form-control\" placeholder=\"Email\" type=\"email\" required>\n\n\n                        <select class=\"form-control\" style=\"width: 150px;max-height: 80px;\">\n                                        <option selected=\"\">+91</option>\n                                        <option value=\"1\">+972</option>\n                                        <option value=\"2\">+198</option>\n                                        <option value=\"3\">+701</option>\n                                    </select>\n                        <input name=\"\" class=\"form-control\" placeholder=\"Phone number\" type=\"text\" style=\"max-width: 200px;\" required>\n\n\n                        <select class=\"form-control\">\n                                        <option selected=\"\"> Govt. ID Proof</option>\n                                        <option>PAN Card</option>\n                                        <option>Aadhar card</option>\n                                        <option>Voter's ID</option>\n                                    </select>\n                        <input name=\"\" class=\"form-control\" placeholder=\"Proof\" type=\"text\" required>\n\n\n                        <input class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Create password\" type=\"password\" [(ngModel)]=\"password\" required>\n\n                        <input class=\"form-control\" id=\"retypepassword\" name=\"retypepassword\" placeholder=\"Repeat password\" type=\"password\" [(ngModel)]=\"retypepassword\" required>\n                        <div *ngIf=\"password!=retypepassword\">\n                            Passwords doesnt match\n                        </div>\n\n                        <button type=\"submit\" class=\"form-control btn btn-primary btn-block\"> Create Account  </button>\n\n                        <p class=\"text-center\">Have an account? <a href=\"\">Log In</a> </p>\n                    </div>\n                </form>\n            </article>\n        </div>\n        <!-- card.// -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/splash/splash.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/splash/splash.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"box-shadow: black 2px 2px 5px\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators \">\n                <li data-target=\"#myCarousel \" data-slide-to=\"0 \"></li>\n                <li data-target=\"#myCarousel \" data-slide-to=\"1 \"></li>\n                <li data-target=\"#myCarousel \" data-slide-to=\"2 \" class=\"active \"></li>\n            </ol>\n\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner \">\n\n                <div class=\"item active \">\n                    <img src=\"assets/telecom3.jpg \" alt=\"Keyboard \" style=\"width:100%; \">\n                    <div class=\"carousel-caption \">\n\n\n                    </div>\n                </div>\n\n                <div class=\"item \">\n                    <img src=\"assets/telecom2.png \" alt=\"Keyboard2 \" style=\"width:100%; \">\n                    <div class=\"carousel-caption \">\n\n                        <p style=\"color:rgb(255, 255, 255) \"><b>SECURE COMMUNICATION</b></p>\n                    </div>\n                </div>\n\n                <div class=\"item \">\n                    <img src=\"assets/telecom1.jpg \" alt=\"Keyboard3 \" style=\"width:100%; \">\n                    <div class=\"carousel-caption \">\n                        <p style=\"color:rgb(255, 255, 255) \"><b>HIGH SPEED CONNECTIVITY</b></p>\n                        <!-- <p style=\"color:rgb(12, 6, 6) \"><b></b></p> -->\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Left and right controls -->\n            <a class=\"left carousel-control \" href=\"#myCarousel \" data-slide=\"prev \">\n                <span class=\"glyphicon glyphicon-chevron-left \"></span>\n                <span class=\"sr-only \">Previous</span>\n            </a>\n            <a class=\"right carousel-control \" href=\"#myCarousel \" data-slide=\"next \">\n                <span class=\"glyphicon glyphicon-chevron-right \"></span>\n                <span class=\"sr-only \">Next</span>\n            </a>\n        </div>\n\n\n    </div>\n    <div class=\"col-md-6 \">\n\n\n\n        <div class=\"panel with-nav-tabs panel-default \" style=\"margin-bottom: 0px; padding-bottom: 0px;box-shadow: black 2px 2px 5px \">\n            <div class=\"panel-heading \">\n                <ul class=\"nav nav-tabs \">\n                    <li [class.active]=\"selectedpane==1\"><a href=\"javascript:;\" (click)=\"changepane(1)\">Prepaid</a></li>\n                    <li [class.active]=\"selectedpane==2\"><a href=\"javascript:;\" (click)=\"changepane(2)\">Postpaid</a></li>\n                    <li [class.active]=\"selectedpane==3\"><a href=\"javascript:;\" (click)=\"changepane(3)\">Dongle</a></li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"panel-body \" style=\"margin-top: 0px; padding: 0px; box-shadow: black 2px 2px 5px \">\n            <div class=\"tab-content \" style=\"background:rgb(214, 214, 214) \">\n                <div *ngIf=\"selectedpane==1\" style=\"padding:20px; \">\n\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:20px;padding-top:0px;padding-bottom:0px \">Switch to VoizFonica. Change to VoizFonica without losing your number to your old service provier. </div>\n\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:10px \">MOBILE : +91 <input type=\"text \" /></div>\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary \"> Get Started !!</button></div>\n                </div>\n                <div *ngIf=\"selectedpane==2\" style=\"padding-top:20px; padding-bottom: 20px\">\n\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:20px;padding-top:0px;padding-bottom:0px \">Subscribe to VoizFonica Postpaid. Benefits of postpaid account:\n                        <ul>\n\n                            <li>Set up auto repayment of bills</li>\n                            <li>Track your usage</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:10px \">MOBILE : +91 <input type=\"text \" /></div>\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary \"> Get Started !!</button></div>\n\n                </div>\n                <div *ngIf=\"selectedpane==3\" style=\"padding-top:20px; \">\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:20px;padding-top:0px;padding-bottom:0px \">Buy VoizFonica Dongle\n                        <ul>\n\n                            <li>Plug and play</li>\n                            <li>Feel connected wherever you go</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:10px \">MOBILE : +91 <input type=\"text \" /></div>\n                    <div class=\"form-group \" style=\"padding-left:20px;padding-right:30px;padding-top:10px;padding-bottom:0px \"><button type=\"button \" class=\"btn btn-primary \"> Get Started !!</button></div>\n                    <br/>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<div class=\"container \">\n    <div style=\"padding-top: 40px;\">\n        <h3 style=\"display:inline \">Testimonials.</h3>\n        <p style=\"display:inline \">Four million customers speaks the same, Quality at the best!</p>\n    </div>\n\n    <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <div class=\"card \" style=\"width:200px; padding-top: 40px;padding-bottom: 20px; \">\n                <img class=\"card-img-top \" src=\"assets/avatar1.png \" alt=\"Card image \" style=\"width: 100% \">\n                <div class=\"card-body \">\n                    <h4 class=\"card-title \">Suresh</h4>\n                    <p class=\"card-text \">Support and service are always the best</p>\n                    <a href=\"# \" class=\"btn btn-primary \">Read Review</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3 \">\n            <div class=\"card \" style=\"width:200px; padding-top: 40px;padding-bottom: 20px; \">\n                <img class=\"card-img-top \" src=\"assets/avatar2.png \" alt=\"Card image \" style=\"width: 100% \">\n                <div class=\"card-body \">\n                    <h4 class=\"card-title \">Harish</h4>\n                    <p class=\"card-text \">I get uninterrupted internet. All because of VoizFonica!</p>\n                    <a href=\"# \" class=\"btn btn-primary \">Read Review</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3 \">\n            <div class=\"card \" style=\"width:200px; padding-top: 40px;padding-bottom: 20px; \">\n                <img class=\"card-img-top \" src=\"assets/avatar3.png \" alt=\"Card image \" style=\"width: 100% \">\n                <div class=\"card-body \">\n                    <h4 class=\"card-title \">Vimal</h4>\n                    <p class=\"card-text \">One great service provider</p>\n                    <a href=\"# \" class=\"btn btn-primary \">Read Review</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3 \">\n            <div class=\"card \" style=\"width:200px; padding-top: 40px;padding-bottom: 20px; \">\n                <img class=\"card-img-top \" src=\"assets/avatar1.png \" alt=\"Card image \" style=\"width: 100% \">\n                <div class=\"card-body \">\n                    <h4 class=\"card-title \">Brian</h4>\n                    <p class=\"card-text \">One great service provider</p>\n                    <a href=\"# \" class=\"btn btn-primary \">Read Review</a>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>store works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subcomponents/chat-float/chat-float.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subcomponents/chat-float/chat-float.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event__search__floater\">\n    <a routerLink=\"/support\">\n        <div class=\"btn btn-primary\" style=\"border-radius: 50%; z-index: 99999999\">\n\n            <fa name=\"comment\" size=\"3x\"></fa>\n\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subcomponents/floating-search-bar/floating-search-bar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subcomponents/floating-search-bar/floating-search-bar.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event__search__floater\">\n    <div class=\"search__anchor\">\n        <form id=\"event-search-form\" action=\"get\">\n            <input type=\"text\" class=\"search__bar\" placeholder=\"Search...\" />\n            <input class=\"search__submit\" type=\"submit\" />\n            <div class=\"search__toggler\"></div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transactions/transactions.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div id=\"transaction_history\" class=\"container\">\n    <div id=\"transactions_heading\">\n        TRANSACTIONS\n    </div>\n    <br>\n    <table border=\"1\" id=\"transaction_register\" class=\"center\">\n        <tr>\n            <th>\n                S.No.\n            </th>\n            <th>\n                Transaction Id.\n            </th>\n            <th>\n                Amount\n            </th>\n            <th>\n                Date\n            </th>\n            <th>\n                Time\n            </th>\n            <th>\n                State\n            </th>\n            <th>\n                Invoice\n            </th>\n            <th>\n                Raise ticket\n            </th>\n        </tr>\n        <tr *ngFor=\"let row of rowvalues\">\n            <td>\n                {{row.sno}}\n            </td>\n            <td>\n                {{row.tid}}\n            </td>\n            <td>\n                {{row.amt}}\n            </td>\n            <td>\n                {{row.date}}\n            </td>\n            <td>\n                {{row.time}}\n            </td>\n            <td>\n                {{row.state}}\n            </td>\n            <td>\n                <button class=\"btn-primary\">\n                Download Invoice\n            </button>\n            </td>\n            <td>\n                <button class=\"btn-primary\">\n                Raise Ticket\n            </button>\n            </td>\n        </tr>\n    </table>\n    <br>\n    <br>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewplans/viewplans.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewplans/viewplans.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n            </div>\n\n            <div class=\"col-md-4\">\n\n                <ul class=\"nav navbar-nav\" style=\"display: inline;text-align:center\">\n                    <li class.active=\"selectedpane==1\"><a href=\"javascript:;\" (click)=\"changepane(1)\">Recommended Plans</a></li>\n                    <li class.active=\"selectedpane==2\"><a href=\"javscript:;\" (click)=\"changepane(2)\">All plans</a></li>\n\n\n                </ul>\n            </div>\n            <div class=\"col-md-4\"></div>\n        </div>\n\n    </div>\n\n</nav>\n\n<div class=\"row\" *ngIf=\"selectedpane==1\">\n    <div class=\"col-md-4\">\n        <ul class=\"price\">\n            <li class=\"header\">BASIC PLAN</li>\n            <li class=\"grey\">Rs. 750 / Month</li>\n            <li><img src=\"assets/100mbps.png\" style=\"height:150px; width:150px\"></li>\n            <li>100 Mbps Speed</li>\n\n            <li class=\"grey\"><a href=\"#\" class=\"button\">Choose</a></li>\n        </ul>\n    </div>\n\n\n    <div class=\"col-md-4\">\n        <ul class=\"price\">\n            <li class=\"header\">MEGA PLAN</li>\n            <li class=\"grey\">Rs. 1000 / Month</li>\n            <li><img src=\"assets/250mbps.png\" style=\"height:150px; width:150px\"></li>\n            <li>250 Mbps Speed</li>\n\n            <li class=\"grey\"><a href=\"#\" class=\"button\">Choose</a></li>\n        </ul>\n    </div>\n\n    <div class=\"col-md-4\">\n\n        <ul class=\"price\">\n            <li class=\"header\">SUPREME PLAN</li>\n            <li class=\"grey\">Rs. 2000 / Month</li>\n            <li><img src=\"assets/1000mbps.png\" style=\"height:150px; width:150px\"></li>\n            <li>1000 Mbps Speed</li>\n\n            <li class=\"grey\"><a href=\"#\" class=\"button\">Choose</a></li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"selectedpane==2\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>S.No</th>\n                <th>Plan Name</th>\n                <th>Intenet Speed</th>\n                <th>Broadband Data</th>\n                <th>Monthly Payment</th>\n                <th>Choose</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"info\">\n                <td>Mini Plan</td>\n                <td>30 Mbps</td>\n                <td>120 GB</td>\n                <td>500 Mbps</td>\n                <td>Rs. 650</td>\n                <td><button class=\"button\">Choose</button></td>\n            </tr>\n            <tr class=\"info\">\n                <td>Basic Plan</td>\n                <td>100 Mbps</td>\n                <td>1000 GB</td>\n                <td>1 Gbps</td>\n                <td>Rs. 750</td>\n                <td><button class=\"button\">Choose</button></td>\n            </tr>\n            <tr class=\"info\">\n                <td>Economy Plan</td>\n                <td>150 Mbps</td>\n                <td>1500 GB</td>\n                <td>1 Gbps</td>\n                <td>Rs. 900</td>\n                <td><button class=\"button\">Choose</button></td>\n            </tr>\n            <tr class=\"active\">\n                <td>Mega Plan</td>\n                <td>250 Mbps</td>\n                <td>2000 GB</td>\n                <td>2 Gbps</td>\n                <td>Rs. 1000</td>\n                <td><button class=\"button\">Choose</button></td>\n            </tr>\n            <tr class=\"info\">\n                <td>High Speed Plan</td>\n                <td>1 Gbps</td>\n                <td>3000 GB</td>\n                <td>2 Gbps</td>\n                <td>Rs. 1700</td>\n                <td><button class=\"button\">Choose</button></td>\n            </tr>\n\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _viewplans_viewplans_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewplans/viewplans.component */ "./src/app/viewplans/viewplans.component.ts");
/* harmony import */ var _recharge_recharge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recharge/recharge.component */ "./src/app/recharge/recharge.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _chat_support_chat_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-support/chat-support.component */ "./src/app/chat-support/chat-support.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _payment_initiator_payment_initiator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-initiator/payment-initiator.component */ "./src/app/payment-initiator/payment-initiator.component.ts");














const appRoutes = [
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: { title: "VoizFonica - Dashboard" }
    },
    {
        path: "plans",
        component: _viewplans_viewplans_component__WEBPACK_IMPORTED_MODULE_4__["ViewplansComponent"],
        data: { title: "VoizFonica - Plans" }
    },
    {
        path: "recharge",
        component: _recharge_recharge_component__WEBPACK_IMPORTED_MODULE_5__["RechargeComponent"],
        data: { title: "VoizFonica - Recharge / Pay bill" }
    },
    {
        path: "offers",
        component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__["OffersComponent"],
        data: { title: "VoizFonica - View offers" }
    },
    {
        path: "devices",
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"],
        data: { title: "VoizFonica - Devices" }
    },
    {
        path: "store",
        component: _store_store_component__WEBPACK_IMPORTED_MODULE_8__["StoreComponent"],
        data: { title: "VoizFonica - Find store" }
    },
    {
        path: "transactions",
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_9__["TransactionsComponent"],
        data: { title: "VoizFonica - Transaction history" }
    },
    {
        path: "support",
        component: _chat_support_chat_support_component__WEBPACK_IMPORTED_MODULE_10__["ChatSupportComponent"],
        data: { title: "VoizFonica - Support" }
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        data: { title: "VoizFonica - Login" }
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        data: { title: "VoizFonica - Register" }
    },
    {
        path: "payment",
        component: _payment_initiator_payment_initiator_component__WEBPACK_IMPORTED_MODULE_13__["PaymentInitiatorComponent"],
        data: { title: "VoizFonica - Register" }
    },
    {
        path: "support",
        component: _chat_support_chat_support_component__WEBPACK_IMPORTED_MODULE_10__["ChatSupportComponent"],
        data: { title: "VoizFonica - Support" }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav > .active {\n  font-weight: bold;\n}\n\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa-twitter {\n  background: #55ACEE;\n  color: white;\n}\n\n.fa-google {\n  background: #dd4b39;\n  color: white;\n}\n\n.fa-linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.fa-youtube {\n  background: #bb0000;\n  color: white;\n}\n\n.fa-instagram {\n  background: #125688;\n  color: white;\n}\n\n.fa {\n  padding: 10px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFNrYW5kYSBEaXNrXFx2b2l6Zm9uaWNhXFxhbmd1bGFyLXZvaXpmb25pY2Evc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdj4uYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLWdvb2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEtbGlua2VkaW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLXlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLWluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiA1cHggMnB4O1xyXG59IiwiLm5hdmJhci1uYXYgPiAuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mYS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDVweCAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "angular-voizfonica";
        this.menuitems = [
            { path: "dashboard", name: "Dashboard" },
            { path: "plans", name: "View plans" },
            { path: "recharge", name: "Recharge" },
            { path: "offers", name: "View offers" },
            { path: "transactions", name: "Transaction history" }
        ];
        this.selectedmenu = 0;
    }
    ishome() {
        return this.router.url.split("/")[1] == "";
    }
    selectMenu(index) {
        console.log(index);
        this.selectedmenu = index;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _viewplans_viewplans_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewplans/viewplans.component */ "./src/app/viewplans/viewplans.component.ts");
/* harmony import */ var _recharge_recharge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recharge/recharge.component */ "./src/app/recharge/recharge.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _chat_support_chat_support_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat-support/chat-support.component */ "./src/app/chat-support/chat-support.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _subcomponents_floating_search_bar_floating_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subcomponents/floating-search-bar/floating-search-bar.component */ "./src/app/subcomponents/floating-search-bar/floating-search-bar.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _payment_initiator_payment_initiator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-initiator/payment-initiator.component */ "./src/app/payment-initiator/payment-initiator.component.ts");
/* harmony import */ var _subcomponents_chat_float_chat_float_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subcomponents/chat-float/chat-float.component */ "./src/app/subcomponents/chat-float/chat-float.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _viewplans_viewplans_component__WEBPACK_IMPORTED_MODULE_8__["ViewplansComponent"], _recharge_recharge_component__WEBPACK_IMPORTED_MODULE_9__["RechargeComponent"], _offers_offers_component__WEBPACK_IMPORTED_MODULE_10__["OffersComponent"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_11__["DevicesComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_13__["TransactionsComponent"], _chat_support_chat_support_component__WEBPACK_IMPORTED_MODULE_14__["ChatSupportComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _subcomponents_floating_search_bar_floating_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["FloatingSearchBarComponent"], _splash_splash_component__WEBPACK_IMPORTED_MODULE_18__["SplashComponent"], _payment_initiator_payment_initiator_component__WEBPACK_IMPORTED_MODULE_19__["PaymentInitiatorComponent"], _subcomponents_chat_float_chat_float_component__WEBPACK_IMPORTED_MODULE_20__["ChatFloatComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat-support/chat-support.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/chat-support/chat-support.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#message_item {\n  background-color: white;\n  border: 1px solid black;\n  font-size: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n#chatbox {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 0px;\n  text-align: center;\n  box-shadow: black 2px 2px 5px;\n}\n\n#message_box {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  min-height: 100px;\n  padding: 10px;\n  margin: 10px;\n}\n\n#chatsupport {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n}\n\n#quick_chatbox {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  text-align: center;\n  padding: 0px;\n  box-shadow: black 2px 2px 5px;\n}\n\n#overall_chat_history {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  text-align: center;\n  margin: 25px 25px 25px 25px;\n}\n\n#chat_init {\n  border: 1px solid #00000033;\n  border-radius: 5px;\n  margin: 10px 10px 10px 10px;\n  min-width: 200px;\n}\n\n#chat_window_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#chat_window {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.btn-primary {\n  background-color: white;\n  border: 1px solid black;\n  font-size: 12px;\n  padding: 10px;\n  font-weight: bolder;\n  color: black;\n  border-radius: 5px;\n}\n\n.btn-primary:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n#select_op_head {\n  font-size: 16px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\nth {\n  color: black;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  text-align: center;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n}\n\ntd {\n  background-color: white;\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\ntable.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\ntable {\n  box-shadow: black 2px 2px 5px;\n}\n\n#tickets_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#ticket_history {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1zdXBwb3J0L0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFxjaGF0LXN1cHBvcnRcXGNoYXQtc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC1zdXBwb3J0L2NoYXQtc3VwcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxvQ0FBQTtBQ0ZKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0FDSEo7O0FET0E7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRQTtFQUNJLG9DQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1zdXBwb3J0L2NoYXQtc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXNzYWdlX2l0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jY2hhdGJveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcclxufVxyXG5cclxuI21lc3NhZ2VfYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI2NoYXRzdXBwb3J0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI3F1aWNrX2NoYXRib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn1cclxuXHJcbiNvdmVyYWxsX2NoYXRfaGlzdG9yeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbn1cclxuXHJcbiNjaGF0X2luaXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuI2NoYXRfd2luZG93X2hlYWRpbmcge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI2NoYXRfd2luZG93IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG59XHJcblxyXG4jc2VsZWN0X29wX2hlYWQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbnRhYmxlLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn1cclxuXHJcbiN0aWNrZXRzX2hlYWRpbmcge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI3RpY2tldF9oaXN0b3J5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcclxufSIsIiNtZXNzYWdlX2l0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNjaGF0Ym94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcbn1cblxuI21lc3NhZ2VfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNjaGF0c3VwcG9ydCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jcXVpY2tfY2hhdGJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XG59XG5cbiNvdmVyYWxsX2NoYXRfaGlzdG9yeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjVweCAyNXB4IDI1cHggMjVweDtcbn1cblxuI2NoYXRfaW5pdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbiNjaGF0X3dpbmRvd19oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jY2hhdF93aW5kb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbiNzZWxlY3Rfb3BfaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG50aCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG50ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG50YWJsZS5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggNXB4O1xufVxuXG4jdGlja2V0c19oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jdGlja2V0X2hpc3Rvcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat-support/chat-support.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-support/chat-support.component.ts ***!
  \********************************************************/
/*! exports provided: ChatSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSupportComponent", function() { return ChatSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatSupportComponent = class ChatSupportComponent {
    constructor() {
        this.rows = ['Payment issue', 'Plan suggestion', 'Fault', 'Additional information'];
        this.msgs = ['Hello, i am facing network issue'];
        this.ticketdets = [{ sno: '1', tid: '2879548', date: '28/01/2018', time: '08:26:00', state: 'open' }, { sno: '1', tid: '2879548', date: '28/01/2018', time: '08:26:00', state: 'closed' }];
    }
    ngOnInit() {
    }
    save(f) {
        console.log(f.value);
        this.msgs.push(f.value.message_box);
        f.reset();
    }
};
ChatSupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-support',
        template: __webpack_require__(/*! raw-loader!./chat-support.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-support/chat-support.component.html"),
        styles: [__webpack_require__(/*! ./chat-support.component.scss */ "./src/app/chat-support/chat-support.component.scss")]
    })
], ChatSupportComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".littlespace {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGl0dGxlc3BhY2Uge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiLmxpdHRsZXNwYWNlIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.listofaccounts = [
            { accounticon: "desktop", accounttype: 'Broadband', accountnumber: "988979998985", division: "Chennai north", dueamount: "500" },
            { accounticon: "usb", accounttype: 'Dongle', accountnumber: "988979998985", division: "Chennai north", dueamount: "1000" },
            { accounticon: "phone", accounttype: 'Prepaid Mobile', accountnumber: "988979998985", division: "Chennai north", dueamount: "1233" },
            { accounticon: "desktop", accounttype: 'Broadband', accountnumber: "988979998985", division: "Chennai north", dueamount: "4321" }
        ];
    }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/devices/devices.component.scss":
/*!************************************************!*\
  !*** ./src/app/devices/devices.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/devices/devices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/devices/devices.component.ts ***!
  \**********************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DevicesComponent = class DevicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/index.js!./src/app/devices/devices.component.html"),
        styles: [__webpack_require__(/*! ./devices.component.scss */ "./src/app/devices/devices.component.scss")]
    })
], DevicesComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXFNrYW5kYSBEaXNrXFx2b2l6Zm9uaWNhXFxhbmd1bGFyLXZvaXpmb25pY2Evc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    validate(f) {
        if (f.valid) {
            console.log('1');
            console.log(f.valid);
            console.log(f);
        }
        else {
            console.log('2');
        }
    }
    func(s, t) {
        console.log(s.value, t.value);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/offers/offers.component.scss":
/*!**********************************************!*\
  !*** ./src/app/offers/offers.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/offers/offers.component.ts":
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersComponent = class OffersComponent {
    constructor() { }
    ngOnInit() {
    }
};
OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/offers/offers.component.html"),
        styles: [__webpack_require__(/*! ./offers.component.scss */ "./src/app/offers/offers.component.scss")]
    })
], OffersComponent);



/***/ }),

/***/ "./src/app/payment-initiator/payment-initiator.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/payment-initiator/payment-initiator.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#payment {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n\n#payment_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#payment_content {\n  padding: 25px;\n}\n\n.btn-primary {\n  background-color: white;\n  border: 1px solid black;\n  font-size: 18px;\n  padding: 10px;\n  font-weight: bolder;\n  color: black;\n  border-radius: 5px;\n}\n\n.btn-primary:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n#card_payment {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n\n#card_payment_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 18px;\n  font-weight: bolder;\n}\n\n#card_payment_content {\n  padding: 25px;\n}\n\n#card_make_payment {\n  float: right;\n}\n\n#redirection_net_banking {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  text-align: center;\n  max-height: 300px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n\n#redirect_accept {\n  float: right;\n  padding: 5px;\n  min-width: 100px;\n  margin: 10px;\n}\n\n#redirection_wallets {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  text-align: center;\n  max-height: 250px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n\nselect {\n  border-color: rgba(0, 0, 0, 0.2);\n  min-width: 300px;\n}\n\nselect:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.error {\n  color: red;\n}\n\n#net_banking_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 18px;\n  font-weight: bolder;\n}\n\n#wallets_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 18px;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1pbml0aWF0b3IvRTpcXFNrYW5kYSBEaXNrXFx2b2l6Zm9uaWNhXFxhbmd1bGFyLXZvaXpmb25pY2Evc3JjXFxhcHBcXHBheW1lbnQtaW5pdGlhdG9yXFxwYXltZW50LWluaXRpYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGF5bWVudC1pbml0aWF0b3IvcGF5bWVudC1pbml0aWF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSx1QkFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksb0NBQUE7QUNGSjs7QURNQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDSko7O0FET0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxvQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksVUFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWluaXRpYXRvci9wYXltZW50LWluaXRpYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXltZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcclxufVxyXG5cclxuI3BheW1lbnRfaGVhZGluZyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4jcGF5bWVudF9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG59XHJcblxyXG4jY2FyZF9wYXltZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcclxufVxyXG5cclxuI2NhcmRfcGF5bWVudF9oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbiNjYXJkX3BheW1lbnRfY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4jY2FyZF9tYWtlX3BheW1lbnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jcmVkaXJlY3Rpb25fbmV0X2Jhbmtpbmcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn1cclxuXHJcbiNyZWRpcmVjdF9hY2NlcHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI3JlZGlyZWN0aW9uX3dhbGxldHMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbnNlbGVjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jbmV0X2JhbmtpbmdfaGVhZGluZyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4jd2FsbGV0c19oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn0iLCIjcGF5bWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggNXB4O1xufVxuXG4jcGF5bWVudF9oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jcGF5bWVudF9jb250ZW50IHtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbiNjYXJkX3BheW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcbn1cblxuI2NhcmRfcGF5bWVudF9oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jY2FyZF9wYXltZW50X2NvbnRlbnQge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4jY2FyZF9tYWtlX3BheW1lbnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNyZWRpcmVjdGlvbl9uZXRfYmFua2luZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggNXB4O1xufVxuXG4jcmVkaXJlY3RfYWNjZXB0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3JlZGlyZWN0aW9uX3dhbGxldHMge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbnNlbGVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuI25ldF9iYW5raW5nX2hlYWRpbmcge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiN3YWxsZXRzX2hlYWRpbmcge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/payment-initiator/payment-initiator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/payment-initiator/payment-initiator.component.ts ***!
  \******************************************************************/
/*! exports provided: PaymentInitiatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInitiatorComponent", function() { return PaymentInitiatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentInitiatorComponent = class PaymentInitiatorComponent {
    constructor() { }
    ngOnInit() {
    }
    validate(f) {
        if (f.valid) {
            console.log('1');
            console.log(f.valid);
            console.log(f);
        }
        else {
            console.log('2');
        }
    }
};
PaymentInitiatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-initiator',
        template: __webpack_require__(/*! raw-loader!./payment-initiator.component.html */ "./node_modules/raw-loader/index.js!./src/app/payment-initiator/payment-initiator.component.html"),
        styles: [__webpack_require__(/*! ./payment-initiator.component.scss */ "./src/app/payment-initiator/payment-initiator.component.scss")]
    })
], PaymentInitiatorComponent);



/***/ }),

/***/ "./src/app/recharge/recharge.component.scss":
/*!**************************************************!*\
  !*** ./src/app/recharge/recharge.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab_button {\n  background-color: #286090;\n  border: 0px;\n  padding: 10px;\n  color: white;\n}\n\n.ntab {\n  background-color: #286090;\n  border-right: 1px solid gray;\n  border-top-right-radius: 5px;\n  border-top-right-radius: 5px;\n  overflow: hidden;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaGFyZ2UvRTpcXFNrYW5kYSBEaXNrXFx2b2l6Zm9uaWNhXFxhbmd1bGFyLXZvaXpmb25pY2Evc3JjXFxhcHBcXHJlY2hhcmdlXFxyZWNoYXJnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjaGFyZ2UvcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVjaGFyZ2UvcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiX2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubnRhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iLCIudGFiX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODYwOTA7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5udGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjA5MDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recharge/recharge.component.ts":
/*!************************************************!*\
  !*** ./src/app/recharge/recharge.component.ts ***!
  \************************************************/
/*! exports provided: RechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargeComponent", function() { return RechargeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RechargeComponent = class RechargeComponent {
    constructor() {
        this.value_tab = '1';
        this.value_tab2 = '1';
        this.value_tab3 = '1';
    }
    ngOnInit() {
    }
    activate(num) {
        this.value_tab = num;
        console.log(this.value_tab);
    }
    activate2(num1) {
        this.value_tab2 = num1;
        console.log(this.value_tab2);
    }
    activate3(num1) {
        this.value_tab3 = num1;
        console.log(this.value_tab2);
    }
};
RechargeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recharge',
        template: __webpack_require__(/*! raw-loader!./recharge.component.html */ "./node_modules/raw-loader/index.js!./src/app/recharge/recharge.component.html"),
        styles: [__webpack_require__(/*! ./recharge.component.scss */ "./src/app/recharge/recharge.component.scss")]
    })
], RechargeComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRTpcXFNrYW5kYSBEaXNrXFx2b2l6Zm9uaWNhXFxhbmd1bGFyLXZvaXpmb25pY2Evc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
    validate(f) {
        if (f.valid) {
            console.log('1');
            console.log(f.valid);
            console.log(f);
        }
        else {
            console.log('2');
        }
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/splash/splash.component.scss":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SplashComponent = class SplashComponent {
    constructor() { }
    ngOnInit() {
        this.selectedpane = 1;
    }
    changepane(pane) {
        this.selectedpane = pane;
    }
};
SplashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: __webpack_require__(/*! raw-loader!./splash.component.html */ "./node_modules/raw-loader/index.js!./src/app/splash/splash.component.html"),
        styles: [__webpack_require__(/*! ./splash.component.scss */ "./src/app/splash/splash.component.scss")]
    })
], SplashComponent);



/***/ }),

/***/ "./src/app/store/store.component.scss":
/*!********************************************!*\
  !*** ./src/app/store/store.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreComponent = class StoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html"),
        styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/store/store.component.scss")]
    })
], StoreComponent);



/***/ }),

/***/ "./src/app/subcomponents/chat-float/chat-float.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/subcomponents/chat-float/chat-float.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event__search__floater {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  -webkit-transition: all ease-in-out 0.2s;\n  transition: all ease-in-out 0.2s;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50cy9jaGF0LWZsb2F0L0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFxzdWJjb21wb25lbnRzXFxjaGF0LWZsb2F0XFxjaGF0LWZsb2F0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWJjb21wb25lbnRzL2NoYXQtZmxvYXQvY2hhdC1mbG9hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdWJjb21wb25lbnRzL2NoYXQtZmxvYXQvY2hhdC1mbG9hdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudF9fc2VhcmNoX19mbG9hdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufSIsIi5ldmVudF9fc2VhcmNoX19mbG9hdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/subcomponents/chat-float/chat-float.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/subcomponents/chat-float/chat-float.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatFloatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFloatComponent", function() { return ChatFloatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatFloatComponent = class ChatFloatComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatFloatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-float',
        template: __webpack_require__(/*! raw-loader!./chat-float.component.html */ "./node_modules/raw-loader/index.js!./src/app/subcomponents/chat-float/chat-float.component.html"),
        styles: [__webpack_require__(/*! ./chat-float.component.scss */ "./src/app/subcomponents/chat-float/chat-float.component.scss")]
    })
], ChatFloatComponent);



/***/ }),

/***/ "./src/app/subcomponents/floating-search-bar/floating-search-bar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/subcomponents/floating-search-bar/floating-search-bar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event__search__floater {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  -webkit-transition: all ease-in-out 0.2s;\n  transition: all ease-in-out 0.2s;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.search__anchor {\n  position: relative;\n  width: auto;\n  height: auto;\n}\n\n.search__submit {\n  opacity: 0;\n  width: 0px;\n}\n\n.search__bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  outline: none;\n  border: none;\n  background: #fff;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  opacity: 0;\n  z-index: 5;\n  -webkit-transition: all 0.2;\n  transition: all 0.2;\n  font-size: 1em;\n}\n\n.search__bar:hover {\n  cursor: pointer;\n}\n\n.search__bar:focus {\n  width: 200px;\n  left: auto;\n  opacity: 1;\n  cursor: text;\n  -webkit-transition: all 0.2;\n  transition: all 0.2;\n  padding-left: 25px;\n  padding-right: 70px;\n  box-shadow: #000000 2px 2px 2px;\n}\n\n.search__toggler {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  background: #000000;\n  opacity: 1;\n  top: -4px;\n  left: -4px;\n  border-radius: 50%;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.search__toggler:hover {\n  cursor: pointer;\n}\n\n.search__toggler::before {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: 22px;\n  right: 0;\n  bottom: 0;\n  left: 22px;\n  width: 12px;\n  height: 2px;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.search__toggler::after {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: -5px;\n  right: 0;\n  bottom: 0;\n  left: -5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.search__bar:focus ~ .search__toggler {\n  right: 400px;\n  background: #151515;\n  z-index: 6;\n  -webkit-transition: all 0.2;\n  transition: all 0.2;\n}\n\n.search__bar:focus ~ .search__toggler::before {\n  top: 0;\n  left: 0;\n  width: 25px;\n}\n\n.search__bar:focus ~ .search__toggler::after {\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 2px;\n  border: none;\n  background: white;\n  border-radius: 0%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50cy9mbG9hdGluZy1zZWFyY2gtYmFyL0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFxzdWJjb21wb25lbnRzXFxmbG9hdGluZy1zZWFyY2gtYmFyXFxmbG9hdGluZy1zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWJjb21wb25lbnRzL2Zsb2F0aW5nLXNlYXJjaC1iYXIvZmxvYXRpbmctc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0FDT0Y7O0FETEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtBQ1VGOztBRFJBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9zdWJjb21wb25lbnRzL2Zsb2F0aW5nLXNlYXJjaC1iYXIvZmxvYXRpbmctc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudF9fc2VhcmNoX19mbG9hdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc2VhcmNoX19hbmNob3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNlYXJjaF9fc3VibWl0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwcHg7XHJcbn1cclxuLnNlYXJjaF9fYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLnNlYXJjaF9fYmFyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNlYXJjaF9fYmFyOmZvY3VzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbGVmdDogYXV0bztcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogdGV4dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yO1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIGJveC1zaGFkb3c6ICMwMDAwMDAgMnB4IDJweCAycHg7XHJcbn1cclxuLnNlYXJjaF9fdG9nZ2xlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGxlZnQ6IC00cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5zZWFyY2hfX3RvZ2dsZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoX190b2dnbGVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDIycHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDIycHg7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnNlYXJjaF9fdG9nZ2xlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IC01cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5zZWFyY2hfX2Jhcjpmb2N1cyB+IC5zZWFyY2hfX3RvZ2dsZXIge1xyXG4gIHJpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjtcclxufVxyXG4uc2VhcmNoX19iYXI6Zm9jdXMgfiAuc2VhcmNoX190b2dnbGVyOjpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5zZWFyY2hfX2Jhcjpmb2N1cyB+IC5zZWFyY2hfX3RvZ2dsZXI6OmFmdGVyIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4iLCIuZXZlbnRfX3NlYXJjaF9fZmxvYXRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc2VhcmNoX19hbmNob3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWFyY2hfX3N1Ym1pdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwcHg7XG59XG5cbi5zZWFyY2hfX2JhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc2VhcmNoX19iYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hfX2Jhcjpmb2N1cyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbGVmdDogYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAgMnB4IDJweCAycHg7XG59XG5cbi5zZWFyY2hfX3RvZ2dsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnNlYXJjaF9fdG9nZ2xlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaF9fdG9nZ2xlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMjJweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uc2VhcmNoX190b2dnbGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IC01cHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC01cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5zZWFyY2hfX2Jhcjpmb2N1cyB+IC5zZWFyY2hfX3RvZ2dsZXIge1xuICByaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gIHotaW5kZXg6IDY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI7XG59XG5cbi5zZWFyY2hfX2Jhcjpmb2N1cyB+IC5zZWFyY2hfX3RvZ2dsZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5zZWFyY2hfX2Jhcjpmb2N1cyB+IC5zZWFyY2hfX3RvZ2dsZXI6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/subcomponents/floating-search-bar/floating-search-bar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/subcomponents/floating-search-bar/floating-search-bar.component.ts ***!
  \************************************************************************************/
/*! exports provided: FloatingSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingSearchBarComponent", function() { return FloatingSearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FloatingSearchBarComponent = class FloatingSearchBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
FloatingSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-floating-search-bar',
        template: __webpack_require__(/*! raw-loader!./floating-search-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/subcomponents/floating-search-bar/floating-search-bar.component.html"),
        styles: [__webpack_require__(/*! ./floating-search-bar.component.scss */ "./src/app/subcomponents/floating-search-bar/floating-search-bar.component.scss")]
    })
], FloatingSearchBarComponent);



/***/ }),

/***/ "./src/app/transactions/transactions.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  color: black;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  text-align: center;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n}\n\ntd {\n  background-color: white;\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.btn-primary {\n  background-color: white;\n  border: 1px solid black;\n  font-size: 18px;\n  padding: 10px;\n  font-weight: bolder;\n  border-radius: 5px;\n  color: black;\n}\n\n.btn-primary:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\ntable.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\ntable {\n  box-shadow: black 2px 2px 5px;\n}\n\n#transactions_heading {\n  color: black;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#transaction_history {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: black 2px 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb25zL0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFx0cmFuc2FjdGlvbnNcXHRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpXHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbnRhYmxlLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn1cclxuXHJcbiN0cmFuc2FjdGlvbnNfaGVhZGluZyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4jdHJhbnNhY3Rpb25faGlzdG9yeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgMnB4IDJweCA1cHg7XHJcbn0iLCJ0aCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG50ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxudGFibGUuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxudGFibGUge1xuICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDVweDtcbn1cblxuI3RyYW5zYWN0aW9uc19oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jdHJhbnNhY3Rpb25faGlzdG9yeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IGJsYWNrIDJweCAycHggNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionsComponent = class TransactionsComponent {
    constructor() {
        this.rowvalues = [{ sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }, { sno: '1', tid: '2879548', amt: '256.86', date: '28/01/2018', time: '08:26:00', state: 'Success' }];
    }
    ngOnInit() {
    }
};
TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: __webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html"),
        styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/transactions/transactions.component.scss")]
    })
], TransactionsComponent);



/***/ }),

/***/ "./src/app/viewplans/viewplans.component.scss":
/*!****************************************************!*\
  !*** ./src/app/viewplans/viewplans.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\n.columns {\n  float: left;\n  width: 33.3%;\n  padding: 8px;\n}\n\n.price {\n  list-style-type: none;\n  border: 1px solid #eee;\n  margin: 0;\n  padding: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.price:hover {\n  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);\n}\n\n.price .header {\n  background-color: #111;\n  color: white;\n  font-size: 25px;\n}\n\n.price li {\n  border-bottom: 1px solid #eee;\n  padding: 20px;\n  text-align: center;\n}\n\n.price .grey {\n  background-color: #eee;\n  font-size: 20px;\n}\n\n.button {\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 10px 25px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 600px) {\n  .columns {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3BsYW5zL0U6XFxTa2FuZGEgRGlza1xcdm9pemZvbmljYVxcYW5ndWxhci12b2l6Zm9uaWNhL3NyY1xcYXBwXFx2aWV3cGxhbnNcXHZpZXdwbGFucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3BsYW5zL3ZpZXdwbGFucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdwbGFucy92aWV3cGxhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW5zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ucHJpY2U6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxyXG59XHJcblxyXG4ucHJpY2UgLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ucHJpY2UgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpY2UgLmdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sdW1ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbHVtbnMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMlO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5wcmljZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wcmljZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wcmljZSAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wcmljZSBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmljZSAuZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbHVtbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/viewplans/viewplans.component.ts":
/*!**************************************************!*\
  !*** ./src/app/viewplans/viewplans.component.ts ***!
  \**************************************************/
/*! exports provided: ViewplansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewplansComponent", function() { return ViewplansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewplansComponent = class ViewplansComponent {
    constructor() { }
    ngOnInit() {
        this.selectedpane = 1;
    }
    changepane(pane) {
        this.selectedpane = pane;
    }
};
ViewplansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewplans',
        template: __webpack_require__(/*! raw-loader!./viewplans.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewplans/viewplans.component.html"),
        styles: [__webpack_require__(/*! ./viewplans.component.scss */ "./src/app/viewplans/viewplans.component.scss")]
    })
], ViewplansComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Skanda Disk\voizfonica\angular-voizfonica\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map