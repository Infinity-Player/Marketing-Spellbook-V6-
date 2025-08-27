# SECURITY & Production Hardening

- Do not commit secrets. Use environment variables or secret manager.
- Rotate JWT_SECRET regularly.
- Store refresh tokens in DB and encrypt at rest.
- Use TLS for all production traffic.
- Use scanning tools (npm audit, Snyk).
- Prefer exceljs over xlsx due to past vulnerabilities.
- The repo contains placeholder/stubbed third-party helpers — replace with real SDKs and credentials.
