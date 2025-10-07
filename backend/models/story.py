from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class Story(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    occupation: str
    quote: str
    image: str
    approved: bool = True  # Auto-approve for now
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Ramesh Kumar",
                "location": "Amethi, Uttar Pradesh",
                "occupation": "Farmer",
                "quote": "वो हमारी सुनते हैं, हमारे बीच चलते हैं। मेरा PM राहुल।",
                "image": "https://example.com/image.jpg"
            }
        }

class StoryCreate(BaseModel):
    name: str
    location: str
    occupation: str
    quote: str
    image: str = "https://images.unsplash.com/photo-1749793299204-462f634e53cc"
