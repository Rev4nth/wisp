from rest_framework import serializers

from wisp.web.models import Interest


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'text', 'created_at', 'updated_at')