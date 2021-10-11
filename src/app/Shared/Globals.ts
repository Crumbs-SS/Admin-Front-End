import { isDevMode } from '@angular/core';

const prodUrl = 'https://api.crumbs-ss.link';
const isDevelopment: boolean = isDevMode(); 

const DEV_RESTAURANT_SERVICE_URL="http://localhost:8070";
const DEV_PAYMENT_SERVICE_URL="http://localhost:8090";
const DEV_ACCOUNT_SERVICE_URL="http://localhost:8080";
const DEV_ORDER_SERVICE_URL="http://localhost:8010";
const DEV_EMAIL_SERVICE_URL="http://localhost:8100" ;

export const RESTAURANT_SERVICE_URL = (isDevelopment ?
    DEV_RESTAURANT_SERVICE_URL : prodUrl) + '/restaurant-service';
    
export const PAYMENT_SERVICE_URL = (isDevelopment ? 
    DEV_PAYMENT_SERVICE_URL : prodUrl) + '/payment-service';

export const ACCOUNT_SERVICE_URL = (isDevelopment ? 
    DEV_ACCOUNT_SERVICE_URL : prodUrl) + '/account-service';

export const ORDER_SERVICE_URL = (isDevelopment ? 
    DEV_ORDER_SERVICE_URL : prodUrl) + '/order-service';

export const EMAIL_SERVICE_URL = (isDevelopment ? 
    DEV_EMAIL_SERVICE_URL : prodUrl) + '/email-service';
