from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class Pledge(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: Optional[str] = None
    name: str
    state: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Amit Kumar",
                "state": "Bihar",
                "message": "I believe in truth and justice. #MeraPMRahul"
            }
        }

class PledgeCreate(BaseModel):
    name: str
    state: str
    message: str

class StateWisePledge(BaseModel):
    state: str
    pledges: int
