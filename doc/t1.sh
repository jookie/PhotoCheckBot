
OPENAI_API_KEY="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"
# OPENAI_API_ORG_ID="org-oDhTiyLPDwjVt51BGoxAb50z"
# REPLICATE_API_KEY= "r8_2caNV2t4g86fTmF1DZlH57bYPwYnRki3V6Krj"
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Organization: org-oDhTiyLPDwjVt51BGoxAb50z"
  -H "Content-Type: application/json" \
   -d '{
    "model": "tts-1",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
  }' \
  --output speech.mp3
