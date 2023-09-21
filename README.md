# Photoland E-Commerce

## Start strapi server

Go to `api` folder
```
cd api
```

Then run server in develop mode if you need to change configuration
```
npm run develop
```

or in production
```
npm run start
```

## Start client

Go to `client` folder
```
cd client
```

And run develop mode
```
npm run start
```

## Setup strapi

When server started, you could open http://localhost:1337/admin

In the **`Content-Type Builder`** tab you could see or create in **develop mode** new `Collection Types`

In the **`Content Manager`** tab you could create new entries in **production or develop mode** for collections from **`Content-Type Builder`**

If you don't have token in `client/.env/REACT_APP_API_TOKEN` you can generate it in the **development mode**. 

Go to `Strapi Dashboard` > `Settings` > `API Tokens`. Generate token and then add it to `client/.env/REACT_APP_API_TOKEN`

## Setup stripe

Add keys from https://dashboard.stripe.com/apikeys to `.env` variables.

**Publishable key** 
```
client/.env/REACT_APP_API_STRIPE_PUBLISHABLE_KEY = Publishable_key_value

api/.env/STRIPE_PUBLISHABLE_KEY = Publishable_key_value
```

**Secret key**
```
api/.env/STRIPE_SECRET_KEY = Secret_key_value
```
