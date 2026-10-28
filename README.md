# PEEP SHARE Website

The website runs on Nuxt 4 and Vue 3. The production routes live in `app/pages`, while the shared header and footer live in `app/components` and `app/layouts/default.vue`.

## Development

```bash
yarn install
yarn dev
```

## Production

```bash
yarn build
yarn preview
```

The existing URLs are preserved:

- `/home/`
- `/event/`
- `/event/detail/`
- `/join/`
- `/partner/shop/`
- `/terms-and-conditions/`

The former HTML entry files are retained only as migration references. Nuxt does not use them at runtime.
