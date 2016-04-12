# React Dashboard Drupal Module

This is a boilerplate to create dashboards in drupal by using the react dashboard library. Library documentation is available at https://github.com/NuCivic/react-dashboard

Feel free to modify this code to fit this into your project requirements. If you think there is something that can be provided out-of-the-box please create a PR.


## What's provided?

* A working example
* A drupal page with the needed markup to render a dashboard
* An endpoint to expose the data to be consumed by your dashboard
* An example of the autocomplete endpoint


## Getting started

```bash
$ git clone https://github.com/NuCivic/react_dashboard.git
$ bash init.sh
$ cd app
$ npm run dev_dkan
$ open http://localhost:5000/
```


## Autocomplete endpoint

A placeholder function to retrieve options ready to be consumed by the react autocomplete component.

The required autocomplete format is:

```javascript
[
    {
        label: 'Label to be displayed',
        value: 'machine_name_to_be_iused'
    },
    ...
]
```

There is an example in the code using EntityFieldQuery but you can use any drupal available method to retrieve data only to the requirement of retrieve something with the above format.


## Data endpoint

As the autocomplete endpoint this is a placeholder function. It doesn't provide functionality but facilitate to the developer the dashboard creating by registering a new endpoint.

You can use any drupal method to query data: db_select, EntityFieldQuery, etc. 

**Why you don't provide an standarized way to retrieve data?**
Because data shape is different across projects. Sometimes a csv is enough. Other times you need to expose a robust api to query data. 


## Dashboard template

The dashboard template contains the markup to render the dashboard. It has the root div and load the required css and js files.


## Build

Before commit changes you need to perform a build by running:

```bash
$ npm run build_dkan
```