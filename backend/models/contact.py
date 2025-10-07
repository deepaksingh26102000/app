from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
import uuid

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "message": "I want to volunteer for the movement."
            }
        }

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
