# -*- coding: utf-8 -*-
"""
Created on Fri Jan 31 18:04:26 2020

@author: yec24
"""
import re

"""
mega millions file starts
"""

org_mmlist = list()
with open("mm2017-2020.txt") as f:
  for line in f:
    org_mmlist.append(line.rstrip())
f.close

"""
mega millions white ball
"""
mmwlist = org_mmlist[12:-102]
#print(mmwlist)

new_mmwlist = list()
i=0
j=1
while i<len(mmwlist) and j<len(mmwlist):
    new_mmwlist.extend(re.findall("[0-9]+", mmwlist[i]))
    new_mmwlist.extend(re.findall("[0-9]+", mmwlist[j]))
    i+=4
    j+=4
#print(new_mmwlist)

final_mmwlist = list()
for i in range(0, len(new_mmwlist), 2):
    final_mmwlist.append([new_mmwlist[i], int(new_mmwlist[i + 1])])
#print(final_mmwlist)

mmwdict = dict()
for i in range(0, len(new_mmwlist), 2):
    mmwdict.update({new_mmwlist[i]: int(new_mmwlist[i + 1])})
sort_mmwdict = sorted(mmwdict.items(), key=lambda x: x[1], reverse=True)
#print(sort_mmwdict)

final_mmw8freq = list()
for i in range(len(sort_mmwdict)):
    final_mmw8freq.append(list(sort_mmwdict[i]))
print(final_mmw8freq)

"""
mega millions gold ball
"""

mmglist = org_mmlist[-100:]
#print(mmglist)

new_mmglist = list()
i=0
j=1
while i<len(mmglist) and j<len(mmglist):
    new_mmglist.extend(re.findall("[0-9]+", mmglist[i]))
    new_mmglist.extend(re.findall("[0-9]+", mmglist[j]))
    i+=4
    j+=4
#print(new_mblist)

final_mmglist = list()
for i in range(0, len(new_mmglist), 2):
    final_mmglist.append([new_mmglist[i], int(new_mmglist[i + 1])])
#print(final_mmglist)

mmgdict = dict()
for i in range(0, len(new_mmglist), 2):
    mmgdict.update({new_mmglist[i]: int(new_mmglist[i + 1])})
sort_mmgdict = sorted(mmgdict.items(), key=lambda x: x[1], reverse=True)
#print(sort_mmgdict)

final_mmg8freq = list()
for i in range(len(sort_mmgdict)):
    final_mmg8freq.append(list(sort_mmgdict[i]))
print(final_mmg8freq)

print("============================================================")

"""
powerball file starts
"""

org_pblist = list()
with open("pb2015-2020.txt") as f:
  for line in f:
    org_pblist.append(line.rstrip())
f.close

"""
powerball white ball
"""
pbwlist = org_pblist[12:-134]
#print(pbwlist)

new_pbwlist = list()
i=0
j=1
while i<len(pbwlist) and j<len(pbwlist):
    new_pbwlist.extend(re.findall("[0-9]+", pbwlist[i]))
    new_pbwlist.extend(re.findall("[0-9]+", pbwlist[j]))
    i+=5
    j+=5
#print(new_pbwlist)

final_pbwlist = list()
for i in range(0, len(new_pbwlist), 2):
    final_pbwlist.append([new_pbwlist[i], int(new_pbwlist[i + 1])])
#print(final_pbwlist)

pbwdict = dict()
for i in range(0, len(new_pbwlist), 2):
    pbwdict.update({new_pbwlist[i]: int(new_pbwlist[i + 1])})
sort_pbwdict = sorted(pbwdict.items(), key=lambda x: x[1], reverse=True)
#print(sort_pbwdict)

final_pbw8freq = list()
for i in range(len(sort_pbwdict)):
    final_pbw8freq.append(list(sort_pbwdict[i]))
print(final_pbw8freq)

"""
#powerball red ball
"""

pbrlist = org_pblist[-130:]
#print(pbrlist)

new_pbrlist = list()
i=0
j=1
while i<len(pbrlist) and j<len(pbrlist):
    new_pbrlist.extend(re.findall("[0-9]+", pbrlist[i]))
    new_pbrlist.extend(re.findall("[0-9]+", pbrlist[j]))
    i+=5
    j+=5
#print(new_pbrlist)

final_pbrlist = list()
for i in range(0, len(new_pbrlist), 2):
    final_pbrlist.append([new_pbrlist[i], int(new_pbrlist[i + 1])])
#print(final_pbrlist)

pbrdict = dict()
for i in range(0, len(new_pbrlist), 2):
    pbrdict.update({new_pbrlist[i]: int(new_pbrlist[i + 1])})
sort_pbrdict = sorted(pbrdict.items(), key=lambda x: x[1], reverse=True)
#print(sort_pbrdict)

final_pbr8freq = list()
for i in range(len(sort_pbrdict)):
    final_pbr8freq.append(list(sort_pbrdict[i]))
print(final_pbr8freq)