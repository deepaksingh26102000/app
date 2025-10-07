# MeraPMRahul.com - API Contracts & Integration Plan

## Overview
This document defines the backend architecture, API contracts, and frontend-backend integration strategy for MeraPMRahul.com.

## Authentication Strategy
- **Method**: Emergent Google OAuth (recommended for quick setup)
- **Protected Routes**: Volunteer Zone, Campaign Kits download
- **Public Routes**: Home page, Stories, Events viewing

## Database Models

### 1. User Model
```python
{
    "id": "uuid",
    "email": "string",
    "name": "string",
    "phone": "string",
    "state": "string",
    "category": "supporter | volunteer | worker",
    "supporter_id": "string (MPRxxxxxx)",
    "created_at": "datetime",
    "badge": "string (optional)",
    "points": "int (for volunteers)"
}
```

### 2. Pledge Model
```python
{
    "id": "uuid",
    "user_id": "uuid (optional)",
    "name": "string",
    "state": "string",
    "message": "string",
    "timestamp": "datetime"
}
```

### 3. Event Model
```python
{
    "id": "uuid",
    "title": "string",
    "date": "datetime",
    "time": "string",
    "location": "string",
    "state": "string",
    "description": "string",
    "rsvp_count": "int",
    "created_at": "datetime"
}
```

### 4. RSVP Model
```python
{
    "id": "uuid",
    "event_id": "uuid",
    "user_id": "uuid",
    "name": "string",
    "email": "string",
    "phone": "string",
    "created_at": "datetime"
}
```

### 5. Story Model
```python
{
    "id": "uuid",
    "name": "string",
    "location": "string",
    "occupation": "string",
    "quote": "string",
    "image": "string (url)",
    "approved": "boolean",
    "created_at": "datetime"
}
```

### 6. Contact Model
```python
{
    "id": "uuid",
    "name": "string",
    "email": "string",
    "message": "string",
    "created_at": "datetime"
}
```

## API Endpoints

### Authentication
- **POST /api/auth/google** - Google OAuth login/signup
- **GET /api/auth/me** - Get current user info
- **POST /api/auth/logout** - Logout user

### Supporters/Volunteers/Workers
- **POST /api/join** - Register as supporter/volunteer/worker
  - Request: `{ name, email, phone, state, category }`
  - Response: `{ user, supporter_card: { id, name, state, supporter_id, date } }`

### Pledges
- **GET /api/pledges** - Get pledges (with filters: state, limit)
- **POST /api/pledges** - Submit a pledge
  - Request: `{ name, state, message }`
- **GET /api/pledges/count** - Get total pledge count
- **GET /api/pledges/by-state** - Get state-wise pledge distribution

### Events
- **GET /api/events** - Get all events (with filters: state)
- **GET /api/events/{id}** - Get single event
- **POST /api/events/{id}/rsvp** - RSVP to event
  - Request: `{ name, email, phone }`

### Stories
- **GET /api/stories** - Get approved stories
- **POST /api/stories** - Submit a story
  - Request: `{ name, location, occupation, quote, image }`

### Contact
- **POST /api/contact** - Submit contact form
  - Request: `{ name, email, message }`

### Stats (for volunteer dashboard)
- **GET /api/stats** - Get overall stats
  - Response: `{ totalVolunteers, activeBooths, campusAmbassadors, eventsOrganized, pledgeCount }`

## Frontend Integration Points

### Mock Data to Remove
File: `/app/frontend/src/mock.js`
- Replace all mock data with API calls
- Keep mock.js structure for reference during development

### Components to Update

#### 1. HeroSection.jsx
- Replace `mockData.pledgeCount` with API call to `/api/pledges/count`
- Implement real-time counter update (polling every 10 seconds)

#### 2. JoinMovement.jsx
- Replace form submission with POST to `/api/join`
- Handle success response and display supporter card
- Store supporter info in localStorage

#### 3. PledgeWall.jsx
- GET pledges from `/api/pledges?state={state}`
- GET state data from `/api/pledges/by-state`
- POST new pledge to `/api/pledges`

#### 4. StoriesSection.jsx
- GET stories from `/api/stories`
- Story submission form POST to `/api/stories`

#### 5. EventsSection.jsx
- GET events from `/api/events?state={state}`
- RSVP POST to `/api/events/{id}/rsvp`

#### 6. ContactSection.jsx
- POST form to `/api/contact`

#### 7. VolunteerZone.jsx
- Add authentication check
- GET stats from `/api/stats`
- GET user tasks and events

## Implementation Steps

### Phase 1: Core Backend Setup
1. Create MongoDB models in `/app/backend/models/`
2. Implement authentication with Emergent OAuth
3. Create basic CRUD endpoints

### Phase 2: Frontend Integration
1. Create API service file: `/app/frontend/src/services/api.js`
2. Replace mock data calls with real API calls
3. Add error handling and loading states

### Phase 3: Testing
1. Test all endpoints with backend testing agent
2. Test frontend flows
3. Test authentication flow

## Notes
- All API routes must be prefixed with `/api` for Kubernetes routing
- Use environment variable `REACT_APP_BACKEND_URL` for all API calls
- Implement proper error handling for network failures
- Add loading states for all async operations
