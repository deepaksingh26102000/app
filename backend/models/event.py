from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class Event(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    date: str
    time: str
    location: str
    state: str
    description: str
    rsvp_count: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Nyay Yatra - Delhi Rally",
                "date": "2025-09-15",
                "time": "10:00 AM",
                "location": "Ramlila Maidan, Delhi",
                "state": "Delhi",
                "description": "Join us for a massive rally supporting truth and justice."
            }
        }

class EventCreate(BaseModel):
    title: str
    date: str
    time: str
    location: str
    state: str
    description: str

class RSVP(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event_id: str
    user_id: Optional[str] = None
    name: str
    email: EmailStr
    phone: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class RSVPCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
