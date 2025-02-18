/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
package org.apache.bookkeeper.bookie;

/**
 * A utility class used for managing the <i>stats constants</i> used in server side.
 */
public interface BookKeeperServerStats {

    String CATEGORY_SERVER = "server";

    String SERVER_SCOPE = "bookkeeper_server";
    String BOOKIE_SCOPE = "bookie";

    String SERVER_STATUS = "SERVER_STATUS";
    String SERVER_SANITY = "SERVER_SANITY";

    //
    // Network Stats (scoped under SERVER_SCOPE)
    //

    // Stats
    String CHANNEL_WRITE = "CHANNEL_WRITE";

    //
    // Server Operations
    //

    // Stats
    String ADD_ENTRY_REQUEST = "ADD_ENTRY_REQUEST";
    String ADD_ENTRY = "ADD_ENTRY";
    String WRITE_THREAD_QUEUED_LATENCY = "WRITE_THREAD_QUEUED_LATENCY";
    String ADD_ENTRY_REJECTED = "ADD_ENTRY_REJECTED";
    String FORCE_LEDGER_REQUEST = "FORCE_LEDGER_REQUEST";
    String FORCE_LEDGER = "FORCE_LEDGER";
    String READ_ENTRY_REQUEST = "READ_ENTRY_REQUEST";
    String READ_ENTRY = "READ_ENTRY";
    String READ_ENTRY_REJECTED = "READ_ENTRY_REJECTED";
    String READ_ENTRY_SCHEDULING_DELAY = "READ_ENTRY_SCHEDULING_DELAY";
    String READ_ENTRY_FENCE_REQUEST = "READ_ENTRY_FENCE_REQUEST";
    String READ_ENTRY_FENCE_WAIT = "READ_ENTRY_FENCE_WAIT";
    String READ_ENTRY_FENCE_READ = "READ_ENTRY_FENCE_READ";
    String READ_ENTRY_LONG_POLL_REQUEST = "READ_ENTRY_LONG_POLL_REQUEST";
    String READ_ENTRY_LONG_POLL_PRE_WAIT = "READ_ENTRY_LONG_POLL_PRE_WAIT";
    String READ_ENTRY_LONG_POLL_WAIT = "READ_ENTRY_LONG_POLL_WAIT";
    String READ_ENTRY_LONG_POLL_READ = "READ_ENTRY_LONG_POLL_READ";
    String WRITE_LAC_REQUEST = "WRITE_LAC_REQUEST";
    String WRITE_LAC = "WRITE_LAC";
    String READ_LAC_REQUEST = "READ_LAC_REQUEST";
    String READ_LAC = "READ_LAC";
    String GET_BOOKIE_INFO_REQUEST = "GET_BOOKIE_INFO_REQUEST";
    String GET_BOOKIE_INFO = "GET_BOOKIE_INFO";
    String GET_LIST_OF_ENTRIES_OF_LEDGER = "GET_LIST_OF_ENTRIES_OF_LEDGER";
    String GET_LIST_OF_ENTRIES_OF_LEDGER_REQUEST = "GET_LIST_OF_ENTRIES_OF_LEDGER_REQUEST";

    // Ensemble Stats
    String WATCHER_SCOPE = "bookie_watcher";
    String REPLACE_BOOKIE_TIME = "REPLACE_BOOKIE_TIME";
    String NEW_ENSEMBLE_TIME = "NEW_ENSEMBLE_TIME";
    String FAILED_TO_RESOLVE_NETWORK_LOCATION_COUNT = "FAILED_TO_RESOLVE_NETWORK_LOCATION_TOTAL";
    String ENSEMBLE_NOT_ADHERING_TO_PLACEMENT_POLICY_COUNT = "ENSEMBLE_NOT_ADHERING_TO_PLACEMENT_POLICY_TOTAL";

    // Bookie Quarantine Stats
    String BOOKIE_QUARANTINE = "BOOKIE_QUARANTINE";
    String BOOKIE_QUARANTINE_SKIP = "BOOKIE_QUARANTINE_SKIP";

    // Bookie Operations
    String BOOKIE_ADD_ENTRY = "BOOKIE_ADD_ENTRY";
    String BOOKIE_RECOVERY_ADD_ENTRY = "BOOKIE_RECOVERY_ADD_ENTRY";
    String BOOKIE_READ_ENTRY = "BOOKIE_READ_ENTRY";
    String BOOKIE_FORCE_LEDGER = "BOOKIE_FORCE_LEDGER";
    String BOOKIE_ADD_ENTRY_BYTES = "BOOKIE_ADD_ENTRY_BYTES";
    String BOOKIE_READ_ENTRY_BYTES = "BOOKIE_READ_ENTRY_BYTES";
    String BOOKIE_GET_LIST_OF_ENTRIES_OF_LEDGER = "BOOKIE_GET_LIST_OF_ENTRIES_OF_LEDGER";

    String ADD_ENTRY_IN_PROGRESS = "ADD_ENTRY_IN_PROGRESS";
    String ADD_ENTRY_BLOCKED = "ADD_ENTRY_BLOCKED";
    String ADD_ENTRY_BLOCKED_WAIT = "ADD_ENTRY_BLOCKED_WAIT";
    String READ_ENTRY_IN_PROGRESS = "READ_ENTRY_IN_PROGRESS";
    String READ_ENTRY_BLOCKED = "READ_ENTRY_BLOCKED";
    String READ_ENTRY_BLOCKED_WAIT = "READ_ENTRY_BLOCKED_WAIT";

    //
    // Journal Stats (scoped under SERVER_SCOPE)
    //

    String JOURNAL_SCOPE = "journal";
    String JOURNAL_DIRS = "JOURNAL_DIRS";
    String JOURNAL_ADD_ENTRY = "JOURNAL_ADD_ENTRY";
    String JOURNAL_FORCE_LEDGER = "JOURNAL_FORCE_LEDGER";
    String JOURNAL_SYNC = "JOURNAL_SYNC";
    String JOURNAL_FORCE_WRITE_ENQUEUE = "JOURNAL_FORCE_WRITE_ENQUEUE";
    String JOURNAL_FORCE_WRITE_BATCH_ENTRIES = "JOURNAL_FORCE_WRITE_BATCH_ENTRIES";
    String JOURNAL_FORCE_WRITE_BATCH_BYTES = "JOURNAL_FORCE_WRITE_BATCH_BYTES";
    String JOURNAL_FLUSH_LATENCY = "JOURNAL_FLUSH_LATENCY";
    String JOURNAL_QUEUE_LATENCY = "JOURNAL_QUEUE_LATENCY";
    String JOURNAL_QUEUE_MAX_SIZE = "JOURNAL_QUEUE_MAX_SIZE";
    String JOURNAL_PROCESS_TIME_LATENCY = "JOURNAL_PROCESS_TIME_LATENCY";
    String JOURNAL_CREATION_LATENCY = "JOURNAL_CREATION_LATENCY";
    String JOURNAL_MEMORY_MAX = "JOURNAL_MEMORY_MAX";
    String JOURNAL_MEMORY_USED = "JOURNAL_MEMORY_USED";

    // Ledger Storage Stats
    String STORAGE_GET_OFFSET = "STORAGE_GET_OFFSET";
    String STORAGE_GET_ENTRY = "STORAGE_GET_ENTRY";

    // Ledger Storage Scrub Stats
    String STORAGE_SCRUB_PAGES_SCANNED = "STORAGE_SCRUB_PAGES_SCANNED";
    String STORAGE_SCRUB_PAGE_RETRIES = "STORAGE_SCRUB_PAGE_RETRIES";

    // Ledger Cache Stats
    String LEDGER_CACHE_READ_PAGE = "LEDGER_CACHE_READ_PAGE";
    // SkipList Stats
    String SKIP_LIST_GET_ENTRY = "SKIP_LIST_GET_ENTRY";
    String SKIP_LIST_PUT_ENTRY = "SKIP_LIST_PUT_ENTRY";
    String SKIP_LIST_SNAPSHOT = "SKIP_LIST_SNAPSHOT";

    // Counters
    String JOURNAL_WRITE_BYTES = "JOURNAL_WRITE_BYTES";
    String JOURNAL_QUEUE_SIZE = "JOURNAL_QUEUE_SIZE";
    String READ_BYTES = "READ_BYTES";
    String WRITE_BYTES = "WRITE_BYTES";

    // Ledger Cache Counters
    String LEDGER_CACHE_HIT = "LEDGER_CACHE_HIT";
    String LEDGER_CACHE_MISS = "LEDGER_CACHE_MISS";

    // Compaction/Garbage Collection Related Counters
    String ACTIVE_ENTRY_LOG_COUNT = "ACTIVE_ENTRY_LOG_TOTAL";
    String ACTIVE_ENTRY_LOG_SPACE_BYTES = "ACTIVE_ENTRY_LOG_SPACE_BYTES";
    String ENTRY_LOG_SPACE_BYTES = "ENTRY_LOG_SPACE_BYTES";
    String RECLAIMED_COMPACTION_SPACE_BYTES = "RECLAIMED_COMPACTION_SPACE_BYTES";
    String RECLAIMED_DELETION_SPACE_BYTES = "RECLAIMED_DELETION_SPACE_BYTES";
    String RECLAIM_FAILED_TO_DELETE = "RECLAIM_FAILED_TO_DELETE";
    String THREAD_RUNTIME = "THREAD_RUNTIME";
    String MAJOR_COMPACTION_COUNT = "MAJOR_COMPACTION_TOTAL";
    String MINOR_COMPACTION_COUNT = "MINOR_COMPACTION_TOTAL";
    String ACTIVE_LEDGER_COUNT = "ACTIVE_LEDGER_TOTAL";
    String DELETED_LEDGER_COUNT = "DELETED_LEDGER_TOTAL";
    String GC_LEDGER_RUNTIME = "GC_LEDGER_RUNTIME";
    String COMPACT_RUNTIME = "COMPACT_RUNTIME";
    String EXTRACT_META_RUNTIME = "EXTRACT_META_RUNTIME";
    String ENTRY_LOG_COMPACT_RATIO = "ENTRY_LOG_COMPACT_RATIO";

    // Index Related Counters
    String INDEX_INMEM_ILLEGAL_STATE_RESET = "INDEX_INMEM_ILLEGAL_STATE_RESET";
    String INDEX_INMEM_ILLEGAL_STATE_DELETE = "INDEX_INMEM_ILLEGAL_STATE_DELETE";
    String JOURNAL_FORCE_WRITE_QUEUE_SIZE = "JOURNAL_FORCE_WRITE_QUEUE_SIZE";
    String JOURNAL_NUM_FLUSH_EMPTY_QUEUE = "JOURNAL_NUM_FLUSH_EMPTY_QUEUE";
    String JOURNAL_NUM_FLUSH_MAX_OUTSTANDING_BYTES = "JOURNAL_NUM_FLUSH_MAX_OUTSTANDING_BYTES";
    String JOURNAL_NUM_FLUSH_MAX_WAIT = "JOURNAL_NUM_FLUSH_MAX_WAIT";
    String SKIP_LIST_FLUSH_BYTES = "SKIP_LIST_FLUSH_BYTES";
    String SKIP_LIST_THROTTLING = "SKIP_LIST_THROTTLING";
    String SKIP_LIST_THROTTLING_LATENCY = "SKIP_LIST_THROTTLING_LATENCY";
    String READ_LAST_ENTRY_NOENTRY_ERROR = "READ_LAST_ENTRY_NOENTRY_ERROR";
    String LEDGER_CACHE_NUM_EVICTED_LEDGERS = "LEDGER_CACHE_NUM_EVICTED_LEDGERS";
    String PENDING_GET_FILE_INFO = "PENDING_GET_FILE_INFO";
    String WRITE_FILE_INFO_CACHE_SIZE = "WRITE_FILE_INFO_CACHE_SIZE";
    String READ_FILE_INFO_CACHE_SIZE = "READ_FILE_INFO_CACHE_SIZE";
    String BOOKIES_JOINED = "BOOKIES_JOINED";
    String BOOKIES_LEFT = "BOOKIES_LEFT";

    // Gauge
    String NUM_INDEX_PAGES = "NUM_INDEX_PAGES";
    String JOURNAL_FORCE_WRITE_GROUPING_COUNT = "JOURNAL_FORCE_WRITE_GROUPING_TOTAL";

    // LedgerDirs Stats
    String LD_LEDGER_SCOPE = "ledger";
    String LD_INDEX_SCOPE = "index";
    String LD_WRITABLE_DIRS = "writable_dirs";
    String LD_NUM_DIRS = "num_dirs";

    // EntryLogManagerForEntryLogPerLedger Stats
    String ENTRYLOGGER_SCOPE = "entrylogger";
    String NUM_OF_WRITE_ACTIVE_LEDGERS = "NUM_OF_WRITE_ACTIVE_LEDGERS";
    String NUM_OF_WRITE_LEDGERS_REMOVED_CACHE_EXPIRY = "NUM_OF_WRITE_LEDGERS_REMOVED_CACHE_EXPIRY";
    String NUM_OF_WRITE_LEDGERS_REMOVED_CACHE_MAXSIZE = "NUM_OF_WRITE_LEDGERS_REMOVED_CACHE_MAXSIZE";
    String NUM_LEDGERS_HAVING_MULTIPLE_ENTRYLOGS = "NUM_LEDGERS_HAVING_MULTIPLE_ENTRYLOGS";
    String ENTRYLOGS_PER_LEDGER = "ENTRYLOGS_PER_LEDGER";
}
