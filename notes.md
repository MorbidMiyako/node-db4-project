# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.

Label any relationships between table.

## A good data model

- capture ALL relevant information
- capture ONLY relevant information
- reflects reality
- is flexible, can evolve with the system
- guarantees data integrity, without sacrificing too much performance
- is driven by the way we use the data

## Components

- entities (noons) --> resources in REST --> tables
- properties --> columns
- relationships --> Foreign Keys

## Workflow

- identify entities
- identify properties
- identify relationships

## Relationships

- one to one: rare
- one to many: very common
- many to many: a trick!

## Mantras

- every table should have a primary key
- work on two or three entities at a time
- on a one to many use a Foreign Key
- the FK goes on the many side
- on a many to many use a third table
- the third table can have extra information (columns)

## Characters

- id
- name

Players

Games

- id
- date

Player_Games

- game_id
- player_id
- player_score

Model a School

- the school groups students into cohorts
- a cohort belongs to a track and only one track
- the school has multiple tracks
- for the track, the cohort and students please store the name
- the client wants to see a history of all cohorts for given student
