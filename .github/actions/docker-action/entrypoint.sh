#!/bin/sh -l

echo "Name of file: $1"
RANDOM=$$
R1=$(($RANDOM%100))
R2=$(($RANDOM%100))
echo "Numbers are: $R1 and $R2" > $1