<?php

/**
 * Implements hook_services_resources().
 */
function react_dashboard_services_resources() {
  return array(
    'react_dashboard_get_data' => array(
      'operations' => array(
        'index' => array(
          'help' => 'Returns the data needed for a dashboard component.',
          'file' => array(
            'type' => 'inc',
            'module' => 'react_dashboard',
            'name' => 'react_dashboard.resources',
          ),
          'callback' => '_react_dashboard_get_data',
          'args' => array(
            array(
              'name' => 'resource_id',
              'optional' => TRUE,
              'type' => 'array',
              'description' => 'ID of the resource that contains the data',
              'default value' => 0,
              'source' => array('param' => 'resource_id'),
            ),
          ),
          'access callback' => '_react_dashboard_api_access',
          'access arguments' => array('view'),
          'access arguments append' => FALSE,
        ),
      ),
    ),
    'react_dashboard_autocomplete' => array(
      'operations' => array(
        'index' => array(
          'help' => 'Returns the autocomplete results',
          'file' => array(
            'type' => 'inc',
            'module' => 'react_dashboard',
            'name' => 'react_dashboard.resources',
          ),
          'callback' => '_react_dashboard_autocomplete',
          'args' => array(
            array(
              'name' => 'value',
              'optional' => TRUE,
              'type' => 'array',
              'description' => 'Input value that needs to be autocompleted',
              'default value' => 0,
              'source' => array('param' => 'value'),
            ),
          ),
          'access callback' => '_react_dashboard_api_access',
          'access arguments' => array('view'),
          'access arguments append' => FALSE,
        ),
      ),
    ),
  );
}

/**
 *
 */
function _react_dashboard_api_access() {
  return TRUE;
}

/**
 * API CALL: http://EXAMPLE.COM/api/action/dashboard/data.json
 */
function _react_dashboard_get_data($resource_id) {
  $response = array('success' => true);

  /*
  $records = db_select('Your query here');
  foreach($records as $record) {
    $response['records'][] = (array) $record;
  }
  */

  return $response;
}

/**
 * API CALL: http://EXAMPLE.COM/api/action/dashboard/autocomplete.json
 */
function _react_dashboard_autocomplete($value) {
  $response = array('success' => true);

  /*
  $records = db_select('Your query here');
  foreach($records as $record) {
    $response['records'][] = (array) $record;
  }
  */

  return $response;
}