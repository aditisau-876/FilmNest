import asyncio

from app.clients.gemini_client import gemini_client
from app.ai.entity_resolver import entity_resolver


async def main():

    preferences = gemini_client.extract_preferences(
        "Tom Cruise action movies"
    )

    preferences = await entity_resolver.resolve(
        preferences
    )

    print(preferences)


asyncio.run(main())