# Learnings 8-12 March 2021 <!-- omit in toc -->

## Things I've learned from work the week of 8th to 12th March 2021 <!-- omit in toc -->

- [Using SQL Server Docker image on Apple Silicon M1 machines doesn't work, but the Azure SQL Edge image is an alternative](#using-sql-server-docker-image-on-apple-silicon-m1-machines-doesnt-work-but-the-azure-sql-edge-image-is-an-alternative)

## Using [SQL Server Docker image on Apple Silicon M1 machines doesn't work](https://github.com/microsoft/mssql-docker/issues/668), but the Azure SQL Edge image is an alternative

When trying to run the SQL Server **microsoft/mssql-server-linux** Docker image
on my M1 Mac mini, I get the following error in the logs, with the container
shuting down immediately afterwards:

```text
This program has encountered a fatal error and cannot continue running.
The following diagnostic information is available:

       Reason: 0x00000003
      Message: result == 0
   Stacktrace: 00000040000573fe 0000004000056f90 0000004000036d81
               00000040000377af 000000400004cc51 00000040000295df
               000000400490d830 00000040000269a9
      Process: 9 - sqlservr
       Thread: 9
  Instance Id: 3007acb7-9dce-4ad3-910c-1bf88bdbdc4c
     Crash Id: 137bac92-3cd9-4014-a36b-eab2a5e201f5
  Build stamp: 7d599fe53e35b5a1b0c8a5e4185d8b7334e01a8c5fa77540415502a85f37ef27

Capturing core dump and information...
dmesg: read kernel buffer failed: Operation not permitted
No journal files were found.
No journal files were found.
Attempting to capture a dump with paldumper
WARNING: Capture attempt failure detected
Attempting to capture a filtered dump with paldumper
WARNING: Attempt to capture dump failed.  Reference /var/opt/mssql/log/core.sqlservr.9.temp/log/paldumper-debug.log for details
Attempting to capture a dump with gdb
```

This is a
[known issue, and at the time of writing, there is no fix](https://github.com/microsoft/mssql-docker/issues/668).
However, there is a work-around, which involves using the
**[mcr.microsoft.com/azure-sql-edge](https://hub.docker.com/_/microsoft-azure-sql-edge)**.
[Azure SQL Edge](https://docs.microsoft.com/en-us/azure/azure-sql-edge/features)
is built on the SQL Database Engine and supports both x86_64 and ARM64
architectures. However, it supports only a subset of feature found in SQL Server
2019 on Linux, so it does not cover every use-case. For example, the following
features are **not** supported:

- Full-text indexes
- Replication
- AD integration
- Linked servers
- CLR assemblies
- Etc.

So, your command-line could be:

```bash
docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge
```

Or your Dockerfile:

```Dockerfile
FROM mcr.microsoft.com/azure-sql-edge:latest

ENV ACCEPT_EULA 1
ENV MSSQL_SA_PASSWORD yourStrong(!)Password

EXPOSE 1433
```
