"""Database session management"""
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import text


def _get_async_url() -> str:
    raw = os.environ.get("DATABASE_URL", "postgresql+asyncpg://covenant:covenant@localhost:5432/covenant")
    if raw.startswith("postgresql://") or raw.startswith("postgres://"):
        raw = raw.replace("postgresql://", "postgresql+asyncpg://", 1).replace(
            "postgres://", "postgresql+asyncpg://", 1
        )
    if "?" in raw:
        raw = raw.split("?")[0]
    return raw


_DB_URL = _get_async_url()

engine = create_async_engine(
    _DB_URL,
    echo=False,
    pool_size=5,
    max_overflow=10,
)

async_session = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

Base = declarative_base()


async def init_db():
    """Initialize database connection"""
    async with engine.begin() as conn:
        await conn.execute(text("SELECT 1"))


async def get_db():
    """Dependency for getting DB session"""
    async with async_session() as session:
        yield session
