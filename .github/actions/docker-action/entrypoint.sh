#!/bin/sh -l

echo "Name of file: $1"
RANDOM=$$
R1=$(($RANDOM%100))
R2=$(($RANDOM%100))
echo "Numbers are: $R1 and $R2" > $1
cat $1
echo "We're on the last line of the shell script!"