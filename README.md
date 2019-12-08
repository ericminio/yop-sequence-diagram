# generate diagram

```
node start
```

```
{ config: { padding: 2, margin: 4, trailing: 2 },
  actors:
   [ { name: 'superman' },
     { name: 'batman' },
     { name: 'wonder woman' } ],
  steps:
   [ { description: 'batman -> superman : ok... so you can fly?' },
     { description: 'superman -> batman : yes Sir' },
     { description: 'batman -> wonder woman : can we trust him?' },
     { description: 'wonder woman -> batman : why not?' },
     { description:
        'batman -> wonder woman : well, he is from another planet...' },
     { description:
        'wonder woman -> superman : from which planet are you again?' },
     { description: 'superman -> wonder woman : Krypton' },
     { description: 'wonder woman -> batman : he is ok' },
     { description: 'batman -> wonder woman : I will keep an eye on him!' },
     { description: 'batman -> superman : :)' } ] }
+------------+           +----------+                          +----------------+
|  superman  |           |  batman  |                          |  wonder woman  |
+------------+           +----------+                          +----------------+
|                        |                                     |
|   ok... so you can fly?|                                     |
|<-----------------------|                                     |
|                        |                                     |
|yes Sir                 |                                     |
|----------------------->|                                     |
|                        |                                     |
|                        |can we trust him?                    |
|                        |------------------------------------>|
|                        |                                     |
|                        |                             why not?|
|                        |<------------------------------------|
|                        |                                     |
|                        |well, he is from another planet...   |
|                        |------------------------------------>|
|                        |                                     |
|                        |     from which planet are you again?|
|<-------------------------------------------------------------|
|                        |                                     |
|Krypton                 |                                     |
|------------------------------------------------------------->|
|                        |                                     |
|                        |                             he is ok|
|                        |<------------------------------------|
|                        |                                     |
|                        |I will keep an eye on him!           |
|                        |------------------------------------>|
|                        |                                     |
|                      :)|                                     |
|<-----------------------|                                     |
```