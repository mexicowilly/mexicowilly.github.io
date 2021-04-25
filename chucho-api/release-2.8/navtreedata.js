var NAVTREE =
[
  [ "Chucho", "index.html", [
    [ "Introduction", "index.html", [
      [ "Welcome", "index.html#Welcome", null ],
      [ "C API", "index.html#csection", null ],
      [ "Contact", "index.html#Contact", null ]
    ] ],
    [ "Configuration File", "config_file.html", [
      [ "Logger", "config_file.html#Logger", [
        [ "chucho::logger", "config_file.html#logger", [
          [ "Parameters", "config_file.html#logger_params", null ],
          [ "Example", "config_file.html#logger_example", null ]
        ] ]
      ] ],
      [ "Writers", "config_file.html#Writers", [
        [ "chucho::activemq_writer", "config_file.html#activemq", [
          [ "Parameters", "config_file.html#activemq_params", null ],
          [ "Example", "config_file.html#activemq_example", null ]
        ] ],
        [ "chucho::async_writer", "config_file.html#async", [
          [ "Parameters", "config_file.html#async_params", null ],
          [ "Example", "config_file.html#async_example", null ]
        ] ],
        [ "chucho::cerr_writer", "config_file.html#cerr", [
          [ "Parameters", "config_file.html#cerr_params", null ],
          [ "Example", "config_file.html#cerr_example", null ]
        ] ],
        [ "chucho::cloudwatch_writer", "config_file.html#cloudwatch", [
          [ "Parameters", "config_file.html#cloudwatch_params", null ],
          [ "Example", "config_file.html#cloudwatch_example", null ]
        ] ],
        [ "chucho::cout_writer", "config_file.html#cout", [
          [ "Parameters", "config_file.html#cout_params", null ],
          [ "Example", "config_file.html#cout_example", null ]
        ] ],
        [ "chucho::database_writer", "config_file.html#database", [
          [ "Parameters", "config_file.html#database_params", null ],
          [ "Example", "config_file.html#database_example", null ]
        ] ],
        [ "chucho::email_writer", "config_file.html#email", [
          [ "Parameters", "config_file.html#email_params", null ],
          [ "Example", "config_file.html#email_example", null ]
        ] ],
        [ "chucho::file_writer", "config_file.html#file", [
          [ "Parameters", "config_file.html#file_params", null ],
          [ "Example", "config_file.html#file_example", null ]
        ] ],
        [ "chucho::kafka_writer", "config_file.html#kafka", [
          [ "Parameters", "config_file.html#kafka_params", null ],
          [ "Example", "config_file.html#kafka_example", null ]
        ] ],
        [ "chucho::loggly_writer", "config_file.html#loggly", [
          [ "Parameters", "config_file.html#loggly_params", null ],
          [ "Example", "config_file.html#loggly_example", null ]
        ] ],
        [ "chucho::named_pipe_writer", "config_file.html#named_pipe", [
          [ "Parameters", "config_file.html#named_pipe_params", null ],
          [ "Example", "config_file.html#named_pipe_example", null ]
        ] ],
        [ "chucho::pipe_writer", "config_file.html#pipe", [
          [ "Parameters", "config_file.html#pipe_params", null ],
          [ "Example", "config_file.html#pipe_example", null ]
        ] ],
        [ "chucho::rabbitmq_writer", "config_file.html#rabbitmq", [
          [ "Parameters", "config_file.html#rabbitmq_params", null ],
          [ "Example", "config_file.html#rabbitmq_example", null ]
        ] ],
        [ "chucho::rolling_file_writer", "config_file.html#rolling_file", [
          [ "Parameters", "config_file.html#rolling_file_params", null ],
          [ "Example", "config_file.html#rolling_file_example", null ]
        ] ],
        [ "chucho::syslog_writer", "config_file.html#syslog", [
          [ "Parameters", "config_file.html#syslog_params", null ],
          [ "Example", "config_file.html#syslog_example", null ]
        ] ],
        [ "chucho::windows_event_log_writer", "config_file.html#windows_event_log", [
          [ "Parameters", "config_file.html#windows_event_log_params", null ],
          [ "Example", "config_file.html#windows_event_log_example", null ]
        ] ],
        [ "chucho::zeromq_writer", "config_file.html#zeromq", [
          [ "Parameters", "config_file.html#zeromq_params", null ],
          [ "Example", "config_file.html#zeromq_example", null ]
        ] ]
      ] ],
      [ "Formatters", "config_file.html#Formatters", [
        [ "chucho::json_formatter", "config_file.html#json", [
          [ "Parameters", "config_file.html#json_params", null ],
          [ "Example", "config_file.html#json_example", null ]
        ] ],
        [ "chucho::pattern_formatter", "config_file.html#pattern", [
          [ "Parameters", "config_file.html#pattern_params", null ],
          [ "Example", "config_file.html#pattern_example", null ]
        ] ],
        [ "chucho::yaml_formatter", "config_file.html#yaml", [
          [ "Parameters", "config_file.html#yaml_params", null ],
          [ "Example", "config_file.html#yaml_example", null ]
        ] ]
      ] ],
      [ "File Rollers", "config_file.html#rollers", [
        [ "chucho::numbered_file_roller", "config_file.html#numbered", [
          [ "Parameters", "config_file.html#numbered_params", null ],
          [ "Example", "config_file.html#numbered_example", null ]
        ] ],
        [ "chucho::sliding_numbered_file_roller", "config_file.html#sliding_numbered", [
          [ "Parameters", "config_file.html#sliding_numbered_params", null ],
          [ "Example", "config_file.html#sliding_numbered_example", null ]
        ] ],
        [ "chucho::time_file_roller", "config_file.html#time", [
          [ "Parameters", "config_file.html#time_params", null ],
          [ "Example", "config_file.html#time_example", null ]
        ] ]
      ] ],
      [ "File Roll Triggers", "config_file.html#triggers", [
        [ "chucho::interval_file_roll_trigger", "config_file.html#interval", [
          [ "Parameters", "config_file.html#interval_params", null ],
          [ "Example", "config_file.html#interval_example", null ]
        ] ],
        [ "chucho::on_start_file_roll_trigger", "config_file.html#on_start", null ],
        [ "chucho::size_file_roll_trigger", "config_file.html#size", [
          [ "Parameters", "config_file.html#size_params", null ],
          [ "Example", "config_file.html#size_example", null ]
        ] ],
        [ "chucho::time_file_roller", "config_file.html#time_trigger", null ]
      ] ],
      [ "Filters", "config_file.html#Filters", [
        [ "chucho::cache_and_release_filter", "config_file.html#cache_and_release", [
          [ "Parameters", "config_file.html#cache_and_release_params", null ],
          [ "Example", "config_file.html#cache_and_release_example", null ]
        ] ],
        [ "chucho::duplicate_message_filter", "config_file.html#duplicate", [
          [ "Parameters", "config_file.html#duplicate_params", null ],
          [ "Example", "config_file.html#duplicate_example", null ]
        ] ],
        [ "chucho::level_filter", "config_file.html#level_filter", [
          [ "Parameters", "config_file.html#level_filter_params", null ],
          [ "Example", "config_file.html#level_filter_example", null ]
        ] ],
        [ "chucho::level_threshold_filter", "config_file.html#level_threshold", [
          [ "Parameters", "config_file.html#level_threshold_params", null ],
          [ "Example", "config_file.html#level_threshold_example", null ]
        ] ],
        [ "chucho::ruby_evaluator_filter", "config_file.html#ruby_evaluator", [
          [ "Parameters", "config_file.html#ruby_evaluator_params", null ],
          [ "Example", "config_file.html#ruby_evaluator_example", null ]
        ] ]
      ] ],
      [ "File Compressors", "config_file.html#file_compressors", [
        [ "chucho::bzip2_file_compressor", "config_file.html#bzip2f", [
          [ "Parameters", "config_file.html#bzip2f_params", null ],
          [ "Example", "config_file.html#bzip2f_example", null ]
        ] ],
        [ "chucho::gzip_file_compressor", "config_file.html#gzipf", [
          [ "Parameters", "config_file.html#gzipf_params", null ],
          [ "Example", "config_file.html#gzipf_example", null ]
        ] ],
        [ "chucho::lzma_file_compressor", "config_file.html#lzmaf", [
          [ "Parameters", "config_file.html#lzmaf_params", null ],
          [ "Example", "config_file.html#lzmaf_example", null ]
        ] ],
        [ "chucho::zip_file_compressor", "config_file.html#zipf", [
          [ "Parameters", "config_file.html#zipf_params", null ],
          [ "Example", "config_file.html#zipf_example", null ]
        ] ]
      ] ],
      [ "Compressors", "config_file.html#Compressors", [
        [ "chucho::bzip2_compressor", "config_file.html#bzip2", [
          [ "Parameters", "config_file.html#bzip2_params", null ],
          [ "Example", "config_file.html#bzip2_example", null ]
        ] ],
        [ "chucho::lz4_compressor", "config_file.html#lz4", [
          [ "Parameters", "config_file.html#lz4_params", null ],
          [ "Example", "config_file.html#lz4_example", null ]
        ] ],
        [ "chucho::lzma_compressor", "config_file.html#lzma", [
          [ "Parameters", "config_file.html#lzma_params", null ],
          [ "Example", "config_file.html#lzma_example", null ]
        ] ],
        [ "chucho::noop_compressor", "config_file.html#noop", [
          [ "Parameters", "config_file.html#noop_params", null ],
          [ "Example", "config_file.html#noop_example", null ]
        ] ],
        [ "chucho::zlib_compressor", "config_file.html#zlib", [
          [ "Parameters", "config_file.html#zlib_params", null ],
          [ "Example", "config_file.html#zlib_example", null ]
        ] ]
      ] ],
      [ "Serializers", "config_file.html#Serializers", [
        [ "chucho::capn_proto_serializer", "config_file.html#capn", [
          [ "Parameters", "config_file.html#capn_params", null ],
          [ "Example", "config_file.html#capn_example", null ]
        ] ],
        [ "chucho::flatbuffers_serializer", "config_file.html#flatbuffers", [
          [ "Parameters", "config_file.html#flatbuffers_params", null ],
          [ "Example", "config_file.html#flatbuffers_example", null ]
        ] ],
        [ "chucho::formatted_message_serializer", "config_file.html#formatted_message", [
          [ "Parameters", "config_file.html#formatted_message_params", null ],
          [ "Example", "config_file.html#formatted_message_example", null ]
        ] ],
        [ "chucho::protobuf_serializer", "config_file.html#protobuf", [
          [ "Parameters", "config_file.html#protobuf_params", null ],
          [ "Example", "config_file.html#protobuf_example", null ]
        ] ]
      ] ],
      [ "Email Triggers", "config_file.html#email_triggers", [
        [ "chucho::level_threshold_email_trigger", "config_file.html#level_threshold_email", [
          [ "Parameters", "config_file.html#level_threshold_email_params", null ],
          [ "Example", "config_file.html#level_threshold_email_example", null ]
        ] ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", null, [
      [ "Namespace List", "namespaces.html", "namespaces" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"activemq__writer_8hpp_source.html",
"classchucho_1_1file__writer.html#aa64b2f1a98061aa3b895ece4a9c19a06",
"classchucho_1_1rabbitmq__writer.html#a4c6f78eb294f4156444774cb62f0dba1",
"config_file.html#capn",
"group__miscellaneous.html#ga0429e92df0964b0ace6f2c302fc16df2",
"optional__features_8hpp.html#a25d82f532a0a8cf3d9822675c9d87f25aa9f1b89dd7cc831a3b22401abe16f39b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';