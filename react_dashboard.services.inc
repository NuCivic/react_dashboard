<?php

include_once "react_dashboard.resources.inc";

/**
 * Implements hook_default_services_endpoint().
 */
function react_dashboard_default_services_endpoint() {
  $export = array();

  $endpoint = new stdClass();
  $endpoint->disabled = FALSE; /* Edit this to true to make a default endpoint disabled initially */
  $endpoint->api_version = 3;
  $endpoint->name = 'react_dashboard';
  $endpoint->server = 'rest_server';
  $endpoint->path = 'api/action/dashboard';
  $endpoint->authentication = array();
  $endpoint->server_settings = array(
    'formatters' => array(
      'json' => TRUE,
      'xml' => TRUE,
      'bencode' => FALSE,
      'jsonp' => FALSE,
      'php' => FALSE,
    ),
    'parsers' => array(
      'application/json' => TRUE,
      'application/vnd.php.serialized' => TRUE,
      'application/xml' => TRUE,
      'multipart/form-data' => TRUE,
      'text/xml' => TRUE,
      'application/x-www-form-urlencoded' => FALSE,
    ),
  );
  $endpoint->resources = array(
    'react_dashboard_get_data' => array(
      'alias' => 'data',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'react_dashboard_autocomplete' => array(
      'alias' => 'autocomplete',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
  );
  $endpoint->debug = 0;

  $export['react_dashboard'] = $endpoint;

  return $export;
}