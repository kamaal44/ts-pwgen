# ts-pwgen
Command-Line Password Generator in TypeScript

## Install
```
sudo npm install -g ts-pwgen
```

## Usage
```
pwgen --help
```

```
Usage: pwgen [--length 10] [--parts 3] [--delimiter "-"] [--count 3] [-aAns]

Options:
  -p, --parts      Define how many parts there should be
  -l, --length     Define the length of a part
  -d, --delimiter  Define the delimiter to use if there are multiple parts
  -c, --count      Define how many passwords to generate           [Standard: 1]
  -a, --ascii      Use lowercase letters             [boolean] [Standard: false]
  -A, --ASCII      Use uppercase letters             [boolean] [Standard: false]
  -n, --numbers    Use numbers                       [boolean] [Standard: false]
  -s, --special    Use special characters            [boolean] [Standard: false]
  -h, --help       Show help                                           [boolean]

```

## Copy to clipboard
### macOS
```
pwgen | pbcopy
```


## Examples
### Custom length
`pwgen -l 16` or `pwgen --length 16` or `pwgen --length=16`
```
-TI)!9~GmQm~a=jj
```

### Parts with delimiter
`pwgen --parts=3 --length=5 --delimiter="-"`
```
1TX)C-rivp<-MWvZ5
```

#### ProTip: Use parts for WiFi-friendly passwords
`pwgen -p 4 -l 5 -an`
```
jhnxp-geehp-rtz2n-3m4vt
```
The delimiter defaults to `-`.

### Create multiple passwords
`pwgen -c 5`
```
@T:6Z8}5G"dIENbab^qvh;^}##LY{F
3Qy7@`&Ujh;aQL0dMz%@M(IfswdLfa
Sg5O+@L<:Ni1E>k<F>{,XvS|{Y|^W|
ZKf/]e-unOP8YWPv4W@eYe*yL6{lk}
N^)@rFD+1F-G!v%UZcxeV)FzIMfn]]
```

### Only use lowercase letters
`pwgen -a`
```
jpgthoyjmwumnoiroqynbhywoxhjnb
```

### Only use uppercase letters
`pwgen -A`
```
AUAYYZJXWMIKMPJGHVQSPKUGPUFTCU
```

### Only use numbers
`pwgen -n`
```
647681199479680747570268980919
```

### Only use special characters
`pwgen -s`
```
=<}(<>}/,_.*@:|<*++"=)^;^:|)_+
```

### Use letters and numbers
`pwgen -aAn`
```
APlngye5IiXTu0z7NETffgS67bOX48
```

## Development
### Unit tests
```
npm test
```

### Build from TypeScript source
```
npm run build
```
