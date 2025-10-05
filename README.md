# react-with-amplify-auth
Template app with amplify auth

```mermaid
@startuml
title PointView Code Structure

class Point {
    +-> id: String
    +-> name: String
}

class Observation extends Point {
    +-> eventType: String
    +-> eventCode: String
    +-> timestamp: DateTime
}

class DisplayGroup contains Observations
    +-> observations: List of Observation objects

class Input contains Observation
    +-> inputId: String

class EventSource contains Observation
    +-> eventId: String

class Output contains EventSource
    +-> outputs: List of EventSource objects

EndOfDrawing
@enduml
```

