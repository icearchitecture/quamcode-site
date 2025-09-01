#!/bin/bash

echo "🔍 Monitoring DNS propagation for quamcode.com"
echo "⏱️  Checking every 30 seconds..."
echo "📍 Target: 76.76.21.21 (Vercel)"
echo ""

while true; do
    current_ip=$(dig quamcode.com +short | head -1)
    current_www=$(dig www.quamcode.com CNAME +short)
    timestamp=$(date +"%H:%M:%S")
    
    echo -n "[$timestamp] "
    
    if [[ "$current_ip" == "76.76.21.21" ]]; then
        echo "✅ Root domain updated! → $current_ip"
        root_updated=true
    else
        echo "⏳ Root domain still old → $current_ip"
        root_updated=false
    fi
    
    if [[ "$current_www" == *"vercel"* ]]; then
        echo "            ✅ WWW updated! → $current_www"
        www_updated=true
    else
        echo "            ⏳ WWW still old → $current_www"
        www_updated=false
    fi
    
    if [[ "$root_updated" == true && "$www_updated" == true ]]; then
        echo ""
        echo "🎉 DNS fully propagated! Your site should now load from Vercel!"
        echo "🌐 Visit: https://quamcode.com"
        break
    fi
    
    echo ""
    sleep 30
done
