# MartialArtsPedia

MartialArtsPedia is a Jekyll-based reference site for martial arts knowledge, history, people, concepts, and regions.

The project is designed as a lightweight "factbook" rather than a promotional project site. It uses structured data, collection pages, and concise profile layouts.

## Structure

- `_data/arts.yml` stores normalized martial art records.
- `_data/people.yml` stores notable people records.
- `_data/topics.yml` stores martial arts concepts and methods.
- `_data/regions.yml` stores regional martial arts context.
- `_data/timeline.yml` stores selected historical anchors.
- `_arts/`, `_people/`, `_topics/`, and `_regions/` contain generated profile pages.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

## Expand the factbook

Add new entries to the relevant `_data/*.yml` file and create a matching collection document in `_arts`, `_people`, `_topics`, or `_regions`.

## Editorial direction

Entries should remain concise, structured, and evidence-aware. The goal is not to rank martial arts, but to document systems, history, methods, regions, and people clearly.
