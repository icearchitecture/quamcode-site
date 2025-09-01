# Domain Setup Guide for QuamCode Site

## Adding Your Custom Domain to Vercel

### Option 1: Add Domain via Command Line
```bash
# Replace 'yourdomain.com' with your actual domain
npx vercel domains add yourdomain.com
```

### Option 2: Add Domain via Vercel Dashboard
1. Go to: https://vercel.com/quam-code1/quamcode-site/settings/domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## DNS Configuration for Squarespace Domains

If your domain is registered with Squarespace, you'll need to:

### For Root Domain (e.g., quamcode.com):
1. Log in to your Squarespace account
2. Go to Settings → Domains → [Your Domain] → DNS Settings
3. Add these DNS records:

**A Records:**
- Host: `@`
- Points to: `76.76.21.21`

### For Subdomain (e.g., www.quamcode.com):
**CNAME Record:**
- Host: `www`
- Points to: `cname.vercel-dns.com`

### For Apex Domain with www redirect:
1. Add both A record and CNAME record as above
2. In Vercel, set www.yourdomain.com as primary

## Alternative: Transfer Domain to Vercel
For easier management, you can transfer your domain to Vercel:
```bash
npx vercel domains buy yourdomain.com
```

## Verify Domain Setup
After adding DNS records, verify with:
```bash
npx vercel domains inspect yourdomain.com
```

## Common Domains for QuamCode:
- quamcode.com
- quamcode.io
- quamcode.dev
- quamcode.tech

## DNS Propagation
- DNS changes can take 24-48 hours to propagate
- You can check status at: https://www.whatsmydns.net/

## SSL Certificate
- Vercel automatically provisions SSL certificates
- No additional configuration needed

---

Once you provide your domain name, I can help you set it up!
