# React Dashboard Drupal Module

This is a boilerplate to create dashboards in Drupal by using the **React Dashboard** library. Library documentation is available at https://github.com/NuCivic/react-dashboard

Feel free to modify this code to fit your project requirements. If you think there is something that can be provided out-of-the-box please create a PR.


## What's provided?

* A working example
* A Drupal page with the needed markup to render a dashboard
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

A placeholder function to retrieve options ready to be consumed by the *React autocomplete* component.

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

We give an example in the code using *EntityFieldQuery* but you can use any Drupal method available to retrieve data as long as it's similar to the format used above.


## Data endpoint

As the autocomplete endpoint, this is a placeholder function. It doesn't provide true functionality, but it does allow you create a dashboard by registering a new endpoint.

You can use any Drupal method to query data: db_select, EntityFieldQuery, etc. 

**Why don't you provide a standarized way to retrieve data?**
Data format differs across projects. Sometimes a csv is enough, and other times you need to expose a robust api to query data. So creating standards didn't make sense in this module. 


## Dashboard template

The **Dashboard template** contains the markup to render the dashboard. It has the root div and load the required css and js files.


## Build

Before commit changes you need to perform a build by running:

```bash
$ npm run build_dkan
```
