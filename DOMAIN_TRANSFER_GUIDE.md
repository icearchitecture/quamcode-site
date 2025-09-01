# Transfer QuamCode.com from Squarespace to Vercel

## Pre-Transfer Requirements

### 1. In Squarespace (Do This First!)
1. Log in to your Squarespace account
2. Go to: Settings → Domains → quamcode.com
3. **Unlock the domain** (remove transfer lock)
4. **Get the Auth/EPP Code** (transfer authorization code)
5. **Ensure domain is 60+ days old** (ICANN requirement)
6. **Update contact email** to one you can access

### 2. Domain Transfer Eligibility
- ✅ Domain must be unlocked
- ✅ Must have auth/EPP code
- ✅ Domain must be 60+ days old
- ✅ Cannot be within 60 days of last transfer
- ✅ Must not expire within 15 days

## Transfer Process

### Option A: Via Vercel Dashboard (Easier)
1. Go to: https://vercel.com/domains
2. Click "Transfer Domain"
3. Enter: quamcode.com
4. Enter the Auth/EPP code from Squarespace
5. Pay transfer fee (~$20, includes 1 year extension)

### Option B: Via Command Line
```bash
# Once domain is unlocked with auth code:
npx vercel domains transfer-in quamcode.com --auth-code YOUR_EPP_CODE
```

## Transfer Timeline
- **Initiation**: Immediate after payment
- **Confirmation Email**: Within 1 hour
- **Transfer Complete**: 5-7 days typically
- **DNS Updates**: Automatic after transfer

## During Transfer
- Website stays live
- Email continues working
- No downtime expected

## Post-Transfer Benefits
- Unified management in Vercel
- Automatic SSL renewals
- Better performance with Vercel DNS
- No more DNS configuration needed
- Single dashboard for domain + hosting

## Important Notes
1. **Get Auth Code First** - Can't transfer without it
2. **Check Email** - You'll get confirmation requests
3. **Domain Extension** - Transfer adds 1 year to expiration
4. **Cost** - Usually ~$20/year with Vercel

## Squarespace Transfer Steps
1. Squarespace Dashboard → Settings → Domains
2. Click on quamcode.com
3. Advanced Settings → Transfer Domain Away
4. Unlock domain (turn off transfer lock)
5. Get authorization code
6. Use code in Vercel transfer

## Need Help?
- Squarespace Transfer Guide: https://support.squarespace.com/hc/en-us/articles/205812378
- Vercel Support: https://vercel.com/support
- Transfer Status: Run `npx vercel domains ls`

---

**Action Required**: Get your auth/EPP code from Squarespace first!
