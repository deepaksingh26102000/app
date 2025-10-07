from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: str
    phone: str
    state: str
    category: str  # supporter, volunteer, worker
    supporter_id: str = Field(default_factory=lambda: f"MPR{str(uuid.uuid4())[:8].upper()}")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    badge: Optional[str] = "Nyay Mitra"
    points: int = 0
    google_id: Optional[str] = None

    class Config:
        json_schema_extra = {
            "example": {
                "email": "user@example.com",
                "name": "Rajesh Kumar",
                "phone": "+91 9876543210",
                "state": "Uttar Pradesh",
                "category": "supporter"
            }
        }

class UserCreate(BaseModel):
    email: EmailStr
    name: str
    phone: str
    state: str
    category: str

class SupporterCard(BaseModel):
    id: str
    name: str
    state: str
    supporter_id: str
    date: str
    category: str
