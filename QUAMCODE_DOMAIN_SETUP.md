# QuamCode.com Domain Setup Instructions

## Current Status
✅ Domain added to Vercel project
❌ Domain verification needed

## Next Steps to Complete Setup

### 1. Verify Domain Ownership
Go to: https://vercel.com/quam-code1/quamcode-site/settings/domains

You'll see `quamcode.com` listed with a verification requirement.

### 2. Add DNS Records in Your Domain Provider

#### If Domain is with Squarespace:
1. Log in to Squarespace
2. Go to: Settings → Domains → quamcode.com → DNS Settings
3. Add these records:

**For quamcode.com (root domain):**
- Type: A
- Host: @
- Points to: 76.76.21.21

**For www.quamcode.com:**
- Type: CNAME
- Host: www
- Points to: cname.vercel-dns.com

#### If Domain is with Another Provider:
The same records apply, just access your provider's DNS settings.

### 3. Add TXT Record for Verification
Vercel will show a TXT record for verification. It looks like:
- Type: TXT
- Host: _vercel
- Value: [verification-code]

Add this in your DNS settings.

### 4. Wait for DNS Propagation
- Usually takes 5-30 minutes
- Can take up to 48 hours in rare cases

### 5. Verify in Vercel Dashboard
Once DNS propagates:
1. Go back to: https://vercel.com/quam-code1/quamcode-site/settings/domains
2. Click "Verify" next to quamcode.com
3. Vercel will automatically provision SSL certificates

## Alternative: Quick Setup via Dashboard
1. Visit: https://vercel.com/quam-code1/quamcode-site/settings/domains
2. Click on `quamcode.com`
3. Follow the on-screen instructions
4. Vercel will show you exactly which DNS records to add

## Check Domain Status
```bash
# After adding DNS records, check status:
dig quamcode.com
dig www.quamcode.com

# Or use online tool:
# https://www.whatsmydns.net/
```

## Troubleshooting
- If "403 Access Denied": Need to verify domain ownership
- If domain doesn't resolve: Check DNS records are correct
- If SSL error: Wait for certificate provisioning (automatic)

## Support
- Vercel Support: https://vercel.com/support
- DNS Checker: https://www.whatsmydns.net/
- Domain Status: Run `npx vercel domains ls`

---

**Action Required**: 
1. Go to your domain provider (Squarespace, etc.)
2. Add the DNS records listed above
3. Return to Vercel dashboard to complete verification
