#!/bin/sh -l

echo "Name of file: $1"
RANDOM=$$
R1=$(($RANDOM%100))
R2=$(($RANDOM%100))
echo "$R1 $R2" > $1