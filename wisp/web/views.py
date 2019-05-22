from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from wisp.web.models import Interest
from wisp.web.serializers import InterestSerializer


class InterestList(APIView):

    def get(self, request, format=None):
        interests = Interest.objects.all()
        serializer = InterestSerializer(interests, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = InterestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
